/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowImage_tvShow$ref: FragmentReference;
declare export opaque type TvShowImage_tvShow$fragmentType: TvShowImage_tvShow$ref;
export type TvShowImage_tvShow = {|
  +id: string,
  +name: ?string,
  +image: ?{|
    +original: ?string
  |},
  +isFavorite: ?boolean,
  +$refType: TvShowImage_tvShow$ref,
|};
export type TvShowImage_tvShow$data = TvShowImage_tvShow;
export type TvShowImage_tvShow$key = {
  +$data?: TvShowImage_tvShow$data,
  +$fragmentRefs: TvShowImage_tvShow$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TvShowImage_tvShow",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "original",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFavorite",
      "storageKey": null
    }
  ],
  "type": "TvShow"
};
// prettier-ignore
(node: any).hash = '6ac05d6d7a57a0b1503b0bd297fdb7e3';
export default node;
