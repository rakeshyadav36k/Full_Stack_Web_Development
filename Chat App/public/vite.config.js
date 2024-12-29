import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [
//           [
//             'babel-plugin-styled-components'
//             // {
//             //   displayName: true, // Optional: Add component names for easier debugging
//             //   fileName: false, // Optional: Disable filename hashing for easier debugging
//             // },
//           ],
//         ],
//       },
//     }),
//   ],
// });