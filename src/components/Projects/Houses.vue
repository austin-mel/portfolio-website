<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">House Price Prediction</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/housepricepredict">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Information</h1>
      <h1 class="relative bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Report</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white content-center">
        <p class="font-bold underline underline-offset-4">Dataset:</p>
        <p class="pt-2 pb-10">The data used for this project was a publicly available dataset containing 2140 images. Each house is represented by four images for bedroom, bathroom, kitchen and a frontal image of the exterior. 
        The textual data consists of the number of bedrooms, number of bathrooms, area code, zip code, and price of the house. Each row in the textual data represents the number of the house in order.</p>

        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">This project aims to help us develop familiarity with the TensorFlow functional API as well as deepen our understanding of modeling CNNs and FCNNs for regression problems. 
        Additionally, this project shows us how to concatenate two different models to obtain a single output prediction.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">The goal of this project is to create the best-performing neural network and report its performance metrics. Additionally, since this is a regression problem, a life chart and 
        RMSE score of the best model should be provided to further assess the performance of the model.</p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">This project was divided into multiple key parts such as data cleaning and preprocessing, CNN modeling and training, FCNN modeling and training, merging multiple models together, 
        assessing model performance using evaluation metrics, and plotting lift charts. We will develop and evaluate multiple deep learning models for the regression task.</p>

        <p class="font-bold underline underline-offset-4">Conclusions:</p>
        <p class="pt-2 pb-10">We utilized CNN model for image processing and FCNN model for textual information processing, and combined them to use both image and textual data to predict house pricing. 
        We also implemented an additional VGG16 model and combined it with the FCNN model to develop the most optimal and reliable House Price Prediction Model.</p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/1E7GUCgJd9FtrIJBUncmFDRpWi6l5MBNp/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>
  