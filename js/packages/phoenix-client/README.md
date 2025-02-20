# @arizeai/phoenix-client

This package provides a client for the Phoenix API. It is still under active development and is subject to change.

It utilizes [openapi-ts](https://openapi-ts.pages.dev/) to generate the types from the Phoenix OpenAPI spec.

## Installation

```bash
# or yarn, pnpm, bun, etc...
npm install @arizeai/phoenix-client
```

## Configuration

The client will automatically read environment variables from your environment, if available.

The following environment variables are used:

- `PHOENIX_HOST` - The base URL of the Phoenix API.
- `PHOENIX_CLIENT_HEADERS` - Custom headers to add to all requests. A JSON stringified object.

```bash
PHOENIX_HOST=http://localhost:6006 PHOENIX_CLIENT_HEADERS='{"Authorization": "bearer xxxxxx"}' pnpx tsx examples/list_datasets.ts
# emits the following request:
# GET http://localhost:6006/v1/datasets
# headers: {
#   "Authorization": "bearer xxxxxx",
# }
```

Alternatively, you can pass configuration options to the client directly, and they will be prioritized over environment variables and default values.

```ts
const phoenix = createClient({
  options: {
    baseUrl: "http://localhost:6006",
    headers: {
      Authorization: "bearer xxxxxx",
    },
  },
});
```

## Examples

To run examples, install dependencies using `pnpm` and run:

```bash
pnpm install
pnpx tsx examples/list_datasets.ts
# change the file name to run other examples
```
