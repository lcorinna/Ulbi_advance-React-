declare module 'react-dom/client' {
  import { ReactNode } from 'react';
  
  interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  interface RootOptions {
    hydrate?: boolean;
    hydrationOptions?: object;
  }

  export function createRoot(
    container: Element | DocumentFragment,
    options?: RootOptions
  ): Root;
}
