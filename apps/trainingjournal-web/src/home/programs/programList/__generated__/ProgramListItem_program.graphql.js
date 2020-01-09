/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramListItem_program$ref: FragmentReference;
declare export opaque type ProgramListItem_program$fragmentType: ProgramListItem_program$ref;
export type ProgramListItem_program = {|
  +name: ?string,
  +date: ?any,
  +$refType: ProgramListItem_program$ref,
|};
export type ProgramListItem_program$data = ProgramListItem_program;
export type ProgramListItem_program$key = {
  +$data?: ProgramListItem_program$data,
  +$fragmentRefs: ProgramListItem_program$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProgramListItem_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '2f6bbd29b90267fe466e256f99547474';
export default node;