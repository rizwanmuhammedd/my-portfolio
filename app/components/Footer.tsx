// "use client";

// export default function Footer() {
//   return (
//     <footer className="py-8 border-t border-white/10">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center space-y-2">
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Risvan Muhammed. All rights reserved.
//           </p>
//           <p className="text-sm text-primary font-semibold">
//             Full Stack .NET Developer
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Risvan Muhammed. All rights reserved.
          </p>
          <p className="text-sm gradient-text font-semibold">
            Full Stack .NET Developer
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="mailto:risvanmd172@gmail.com" 
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              risvanmd172@gmail.com
            </a>
            <a 
              href="tel:+916238741289" 
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              +91 6238741289
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}