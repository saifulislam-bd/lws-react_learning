const Divider = () => {
return(
<section className="bg-blue-100 dark:bg-blue-900 py-12 sm:py-20">
  <div className="bg-mx-auto px-4">
    <h2 className="bg-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 dark:text-white">Section 1</h2>
    <p className="bg-center text-gray-700 dark:text-gray-200">This is the content of section 1.</p>
  </div>
</section>

<div className="bg-divider dark:bg-gray-800">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-blue-100 dark:fill-blue-900"></path>
  </svg>
</div>

<section className="bg-white dark:bg-gray-800 py-12 sm:py-20">
  <div className="bg-mx-auto px-4">
    <h2 className="bg-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 dark:text-white">Section 2</h2>
    <p className="bg-center text-gray-700 dark:text-gray-300">This is the content of section 2.</p>
  </div>
</section>
}

export default Divider;