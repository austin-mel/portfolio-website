<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">Netflix Subscription Data Analysis</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://public.tableau.com/shared/HDSJF853Y?:display_count=n&:origin=viz_share_link">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">Tableau Dashboard</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Information</h1>
      <h1 class="relative bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Report</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white text-xs 2xl:text-sm content-center">
        <p class="font-bold underline underline-offset-4">Dataset:</p>
        <p class="pt-2 pb-10">The first dataset provides statistics related to every country Netflix is offered in. This includes the total library size, number of TV shows, number of movies, and cost of each plan tier 
        (Basic, Standard, or Premium). 
        <br>
        The second dataset provides a snapshot of a sample Netflix user base, showcasing various aspects of user subscriptions, revenue, account details, and activity. Each row represents a 
        unique user, identified by their User ID. The dataset includes information such as the user’s subscription type (Basic, Standard, or Premium), the monthly revenue generated from their subscription, the date they joined 
        Netflix (Join Date), the date of their last payment (Last Payment Date), and the country in which they are located. Additional columns have been included to provide insights into user behavior and preferences. 
        These columns include Device Type (e.g., Smart TV, Mobile, Desktop, Tablet) and Account Status (whether the account is active or not). The dataset serves as a synthetic representation and does not reflect actual Netflix user data.</p>

        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">Create an interactive visualization in order to gain insights on the differences in plan costs and library sizes of Netflix catalogs in different countries. Additionally, using a sample Netflix user base dataset
        gain an insight on user demographics such as age, gender, device type, subscription type, as well as number of users gained and lost per month in selected countries. It can be used for analysis and modeling to understand user trends,
        preferences, and revenue generation within a hypothetical Netflix userbase.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">Identify user trends, preferences, and demographics for the different markets in which Netflix operates. Conduct a cost assessment to identify the underpriced or overpriced markets based on library
        size and plan cost. Identify user growth in these countries to determine if cost increases are viable.</p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">Create an interactive data dashboard using Tableau for users explore different metrics and filter by countries and demographics:
          <br>
          • Interactive Dashboard: Create an interactive dashboard that allows filtering of every metric, demographic filter and by country by clicking on the map or different charts.
          <br>
          • Filters: Allow filtering for any specific market or demographic data based on user preference. Enable filtering by clicking on the charts to allow users to obtains specific data.
        </p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/1pVgA53p3_8uLZUo3kc5y4ze-QajzDIsC/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>