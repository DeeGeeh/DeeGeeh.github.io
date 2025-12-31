/// <reference types="astro/client" />

declare module "*.JPG" {
    const content: import('astro').ImageMetadata;
    export default content;
}

// Extend Window interface to include webcoreui modal
interface Window {
    modal: typeof import('webcoreui').modal;
}