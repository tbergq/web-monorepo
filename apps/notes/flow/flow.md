# Flow

### Upgrading dependencies

With many workspaces, you might run into a situation where you have too many errors after upgrading. Since you want to keep your PR's small, this might be the best way to proceed: 

1. clone Flow repository somewhere (`git@github.com:facebook/flow.git`)
2. jump into dev tools (`flow/packages/flow-dev-tools`) and install necessary deps using Yarn
3. you can now run `./tool` from the Flow repo root which enables you very useful utilities for the upgrades

There are 2 useful commands for the upgrades: `add-comments` and `remove-comments`. To add suppress comments run this comment (don't forget to adjust it):

```text
/path/to/tool add-comments --all --bin /path/to/flow --comment "\$FlowFixMe(>=<flow_version>)" .
```

Add `suppress_comment=\\(.\\|\n\\)*\\$FlowFixMe\\($\\|[^(]\\|(\\(<VERSION>\\)? *\\(site=[a-z,_]+\\)?)\\)`, so it understands the version in `$FlowFixMe` correctly (it suppresses the error only from the specified version up). Example of such a suppression comment:

```js
/* $FlowFixMe(>=0.102.0) This comment suppresses an error when upgrading Flow.
 * To see the error delete this comment and run Flow. */
```

To remove unused suppress comments run:

```text
/path/to/tool remove-comments --bin /path/to/flow .
```

This command removes all unused suppress comments while keeping unused comments in flowtests (files ending with `*-flowtest.js` or files in `__flowtests__` directory).

Read this article for more details and justification of this approach: https://medium.com/flow-type/upgrading-flow-codebases-40ef8dd3ccd8

Tip: great way how to migrate some large scale changes is to use `npx flow-upgrade`.


### React types

Prefer to use `React.Node` notation instead of `React$Node` notation. In theory, they are the same, but there are bugs with the latter version.
See [this](https://github.com/facebook/flow/issues/8121) issue

### Object spread and read-only-ness

When you spread objects, the properties looses `read-only-ness`

```js
type A = {| +readOnlyKey: string |}
type B = {| ...A, +otherKey: string |}

function test(x: B) {
  x.readOnlyKey = 'overwrite'; // no error ?
  x.otherKey = 'overwrite'; // no error ??
}
```

To keep `read-only-ness`, you have to use `$ReadOnly<>` for the new object.
```js
type C = $ReadOnly<{| ...A, otherKey: string |}>

function test2(x: C) {
  x.readOnlyKey = 'overwrite'; // error 
  x.otherKey = 'overwrite'; // error
}
```


### Cannot use `val` as computed property

```js
const fn = (val: 'a' | 'b'): {| a?: number, b?: number |} => ({ [val]: 123 });  // Error
const fn2 = (val: 'a' | 'b'): {| a?: number, b?: number |} => ({ [(val: string)]: 123 }); // this fixes the issue
const res = fn('a');
const res2 = fn2('a');
// or just
const x : {a?: number, b?: number} = {};
x[('a': 'a' | 'b')] = 3
```