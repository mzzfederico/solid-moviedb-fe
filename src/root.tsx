// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Header from "./containers/Header";
import "./root.css";

import "./scss/global.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidJS w/ Tailwind w/ TMDB</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="pt-16">
        <Suspense>
          <ErrorBoundary>
            <Header />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
