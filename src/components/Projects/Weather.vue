<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">Global Weather Temperature Data Analysis</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://public.tableau.com/views/WeatherData_17348473855980/Dashboard3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">Tableau Dashboard</button>
      </a>
      <a target="_blank" href="https://github.com/austin-mel/weatheranalysis">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Information</h1>
      <h1 class="relative bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Report</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white">
        <p class="font-bold underline underline-offset-4">Dataset:</p>
        <p class="pt-2 pb-10">The NOAA Global Historical Climatology Network Daily (GHCN-Daily) dataset contains daily observations over global land areas. It contains station-based measurements from land-based stations worldwide.
        GHCN-Daily is a composite of climate records from numerous sources that were merged together and subjected to a common suite of quality assurance reviews. The directory is structured by year from 1750 to present, with each
        file named after the respective year. The data is available in CSV file format and as .csv.gzip files, so any particular year will be named yyyy.csv and yyyy.csv.gz</p>

        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">There are 106,200 stations from around the world containing five weather common measurements: precipitation total (PRCP), snow-fall (SNOW), snow base depth (SNWD), max temperature (TMAX),
        min temperature (TMIN) for each day of the year. Other additional meteorological measurements are included for stations where the data is available. This dataset contains data from 1750 to 2023. This
        totals over 106 GB of data when uncompressed.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">Manipulate the dataset to retrieve the median of TMAX for a particular group of weather stations for all 365 days for each available year. Make a plot showing the average annual temperatures 
        for 5 weather stations. Use parallel programming and a single pass through the data to make the data processing as fast as it can possibly be.</p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">Using a piplelined GREP command, I have selected the 5 stations which have data recorded for the longest amount of time into the past. To analyze the dataset as a whole, I calculated the median temperature
        at these given station for each year. This is achieved by obtaining all 365 days of data for each given year and then calculating the median. This calculated median value is then stored in the CSV file along with the 
        corresponding station ID and year.</p>

        <p class="font-bold underline underline-offset-4">Conclusions:</p>
        <p class="pt-2 pb-10">As seen in my graph, the data trends upwards, supporting my initial hypothesis. However, there is some erronious data graphed. I suspect the extreme dips found at certain years along the graph correspond to
        missing or faulty data. This can be confirmed by checking the dataset for the value under the "quality" flag for those years.</p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/10_-LYpByoeLmu_9RQfUqIQdLxBPMe9ph/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>