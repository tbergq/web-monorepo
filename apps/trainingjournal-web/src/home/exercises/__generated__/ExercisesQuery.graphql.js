/**
 * @flow
 * @relayHash dae93cc8164551564fa4dc02457386da
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type ExerciseList_exercises$ref = any;
export type ExercisesQueryVariables = {||};
export type ExercisesQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ExerciseList_exercises$ref
  |}
|};
export type ExercisesQuery = {|
  variables: ExercisesQueryVariables,
  response: ExercisesQueryResponse,
|};

/*
query ExercisesQuery {
  viewer {
    __typename
    ...ExerciseList_exercises
  }
}

fragment ExerciseListItem_exercise on Exercise {
  name
  muscleGroups
}

fragment ExerciseList_exercises on TraningJournalViewer {
  exercises(first: 10) {
    edges {
      node {
        id
        ...ExerciseListItem_exercise
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExercisesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ExerciseList_exercises",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExercisesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "exercises",
                "storageKey": "exercises(first:10)",
                "args": (v1/*: any*/),
                "concreteType": "ExerciseConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ExerciseEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Exercise",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
                          },
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
                            "name": "muscleGroups",
                            "args": null,
                            "storageKey": null
                          },
                          (v0/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "exercises",
                "args": (v1/*: any*/),
                "handle": "connection",
                "key": "ExerciseList_exercises",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ExercisesQuery",
    "id": null,
    "text": "query ExercisesQuery {\n  viewer {\n    __typename\n    ...ExerciseList_exercises\n  }\n}\n\nfragment ExerciseListItem_exercise on Exercise {\n  name\n  muscleGroups\n}\n\nfragment ExerciseList_exercises on TraningJournalViewer {\n  exercises(first: 10) {\n    edges {\n      node {\n        id\n        ...ExerciseListItem_exercise\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '3afd72b27f7a9c5d89597b1386ba791b';
export default node;