FROM node:16-alpine as deps

WORKDIR /build

COPY package.json lerna.json yarn.lock ./
COPY apps/tvhelper/package.json ./apps/tvhelper/package.json
COPY packages/test-utils/package.json ./packages/test-utils/package.json
COPY packages/test-preset/package.json ./packages/test-preset/package.json
COPY packages/components/package.json ./packages/components/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/theme/package.json ./packages/theme/package.json
COPY packages/formik-wrapper/package.json ./packages/formik-wrapper/package.json
COPY packages/esbuild-tools/package.json ./packages/esbuild-tools/package.json

RUN yarn install --frozen-lockfile

FROM node:16-alpine as builder

WORKDIR /build
ENV NODE_ENV=production
ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/

COPY --from=deps  /build/node_modules ./node_modules
COPY --from=deps  /build/apps/tvhelper/ ./apps/tvhelper/
COPY --from=deps  /build/packages/test-utils/ ./packages/test-utils/
COPY --from=deps  /build/packages/test-preset/ ./packages/test-preset/
COPY --from=deps  /build/packages/components/ ./packages/components/
COPY --from=deps  /build/packages/theme/ ./packages/theme/
COPY --from=deps  /build/packages/utils/ ./packages/utils/
COPY --from=deps  /build/packages/formik-wrapper/ ./packages/formik-wrapper/
COPY --from=deps  /build/packages/esbuild-tools/ ./packages/esbuild-tools/

COPY apps/tvhelper ./apps/tvhelper
COPY packages/test-utils ./packages/test-utils/
COPY packages/test-preset ./packages/test-preset/
COPY packages/components ./packages/components/
COPY packages/utils ./packages/utils/
COPY packages/theme ./packages/theme/
COPY packages/formik-wrapper ./packages/formik-wrapper/
COPY packages/esbuild-tools ./packages/esbuild-tools

COPY package.json lerna.json tsconfig.json ./

RUN yarn lerna run build

FROM node:16-alpine as runner

WORKDIR /build

ENV NODE_ENV=production
ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/apps/tvhelper ./apps/tvhelper
COPY --from=builder /build/packages ./packages

EXPOSE 3020

CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
