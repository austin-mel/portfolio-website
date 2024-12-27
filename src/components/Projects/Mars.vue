<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">Mars Landmark Classification</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/marslandmarkclass">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Information</h1>
      <h1 class="relative bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Report</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white text-xs 2xl:text-sm content-center">
        <p class="font-bold underline underline-offset-4">Dataset:</p>
        <p class="pt-2 pb-10">The Mars orbital image (HiRISE) labeled dataset that was used for this project contains a total of 73,031 landmark images that were detected and extracted from HiRISE browse images. 
        A total of 10,433 landmarks that were detected and extracted from 180 HiRISE browse images. These landmark images were cropped with a 30-pixel margin added to all four sides. Each cropped image was resized to 227x227 pixels, 
        and then 6 additional images were generated using standard augmentations. This resulted in a total of 62,598 augmented landmark images. The images are categorized into the following seven classes: crater, dark dune, streak, bright dune, impact, edge or other.</p>

        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">Missions like HiRISE (High Resolution Imaging Science Experiment) generate large amounts of high resolution images, making manual landmark identification impractical as it is time consuming and 
        prone to human error, especially in exponentially growing datasets. Automating the classification of landmarks through deep learning models will enable faster data analysis, allowing scientists to focus on higher-level 
        research in planetary science and geology.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">Develop a deep learning model to accurately classify Mars landmark images, extracted from NASA’s HiRISE dataset into seven categories. The input is an image from the dataset and the output is a predicted corresponding landmark class.</p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">We develop and evaluate three deep learning models for the classification task. A custom convolutional neural network trained from scratch, a pre-developed VGG16 model fine-tuned used transfer learning for our Mars landmark classification task, 
        and a transformer-based architecture for computer vision tasks. The deep learning model will use computer vision techniques to process the images and identify features that can be mapped to the correct landmark categories.</p>

        <p class="font-bold underline underline-offset-4">Conclusions:</p>
        <p class="pt-2 pb-10">In conclusion, our team was able to create 2 CNN models and 1 transformer model to accurately classify Mars landmark images. Our first CNN model achieved a f1-score of 0.8812. The second CNN model with transfer learning had a f1-score of 0.9033 and the Vision Transformer model had the best f1-score of 0.9731.</p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/1U1l7mImpoQbCNQwLVQLsWsmafx0g6J67/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>
  