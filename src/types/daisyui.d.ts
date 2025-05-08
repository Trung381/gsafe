declare module 'daisyui' {
  import { PluginAPI } from 'tailwindcss/types/config';
  
  const daisyui: {
    handler: (api: PluginAPI) => void;
  };
  
  export = daisyui;
} 