/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { SearchResultsShows_viewer$ref } from "./SearchResultsShows_viewer.graphql";
export type SearchResultsShowsQueryVariables = {
    readonly first?: number | null;
    readonly last?: number | null;
    readonly after?: string | null;
    readonly before?: string | null;
    readonly term: string;
};
export type SearchResultsShowsQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": SearchResultsShows_viewer$ref;
    }) | null;
};
export type SearchResultsShowsQuery = {
    readonly response: SearchResultsShowsQueryResponse;
    readonly variables: SearchResultsShowsQueryVariables;
};



/*
query SearchResultsShowsQuery(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $term: String!
) {
  viewer {
    ...SearchResultsShows_viewer_4c14dZ
  }
}

fragment SearchResultsShows_viewer_4c14dZ on Viewer {
  search(query: $term, first: $first, after: $after, before: $before, last: $last, entities: [SHOW]) {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    edges {
      node {
        __typename
        ... on SearchableItem {
          id
          displayLabel
          href
          imageUrl
          searchableType
        }
        ... on Node {
          __id
        }
      }
    }
  }
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "term",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v3 = [
  v1,
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchResultsShowsQuery",
  "id": null,
  "text": "query SearchResultsShowsQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n  $term: String!\n) {\n  viewer {\n    ...SearchResultsShows_viewer_4c14dZ\n  }\n}\n\nfragment SearchResultsShows_viewer_4c14dZ on Viewer {\n  search(query: $term, first: $first, after: $after, before: $before, last: $last, entities: [SHOW]) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    edges {\n      node {\n        __typename\n        ... on SearchableItem {\n          id\n          displayLabel\n          href\n          imageUrl\n          searchableType\n        }\n        ... on Node {\n          __id\n        }\n      }\n    }\n  }\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchResultsShowsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SearchResultsShows_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "after",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "before",
                "variableName": "before",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "last",
                "variableName": "last",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "term",
                "variableName": "term",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchResultsShowsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "search",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "after",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "before",
                "variableName": "before",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "entities",
                "value": [
                  "SHOW"
                ],
                "type": "[SearchEntity]"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "last",
                "variableName": "last",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "term",
                "type": "String!"
              }
            ],
            "concreteType": "SearchableConnection",
            "plural": false,
            "selections": [
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
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageCursors",
                "storageKey": null,
                "args": null,
                "concreteType": "PageCursors",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "around",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": true,
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "first",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "last",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "previous",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": [
                      v1,
                      v2
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SearchableEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "SearchableItem",
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
                            "name": "displayLabel",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "href",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "imageUrl",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "searchableType",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = 'c0e103749eab8b03afaa8889b0487f8a';
export default node;