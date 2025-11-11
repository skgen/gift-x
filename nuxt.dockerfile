FROM node:22-alpine AS base

ARG NUXT_PUBLIC_APP_HOST
ARG NUXT_PUBLIC_REST_API_HOST
ARG NUXT_PUBLIC_GRAPHQL_API_HOST
ARG NUXT_PUBLIC_ASSETS_API_HOST

ENV NUXT_PUBLIC_APP_HOST=$NUXT_PUBLIC_APP_HOST
ENV NUXT_PUBLIC_REST_API_HOST=$NUXT_PUBLIC_REST_API_HOST
ENV NUXT_PUBLIC_GRAPHQL_API_HOST=$NUXT_PUBLIC_GRAPHQL_API_HOST
ENV NUXT_PUBLIC_ASSETS_API_HOST=$NUXT_PUBLIC_ASSETS_API_HOST

RUN apk update && apk add bash

RUN corepack enable

FROM base AS build

WORKDIR /app/build

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

COPY packages/nuxt packages/nuxt

RUN pnpm --filter ./packages/nuxt install --frozen-lockfile

ENV NODE_ENV=production

WORKDIR /app/build/packages/nuxt

RUN echo "📦 Build starting ⏳"
RUN pnpm build
RUN echo "📦 Build passed ✅"

FROM base AS run

WORKDIR /app/run

COPY --link --from=build /app/build/packages/nuxt/.output .output

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
# CMD ["tail", "-f", "/dev/null"]