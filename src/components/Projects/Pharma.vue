<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">Pharmaceutical Trial Portal</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/pharmatrial">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Information</h1>
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 xl:mx-80">Project Documents</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white">
        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">Semester-long class project for a Software Engineering course at Sacramento State. Students worked in large teams of six members to build communication, collaboration, and teamwork skills. Each team
          designated one member as the "Team Lead", who was in-charge of team coordination and ensuring overall progress for each bi-weekly sprint. Our class was assigned the real-world external client Vendia, a cloud-hosted and
          blockchain-based serverless distributed data platform, as our development project client.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">Build a proof of concept distributed information system with suitable user interfaces that could be used by the FDA, pharmaceutical companies, and participating health care providers to exchange
        study data as it is produced (i.e., in near real time) in a secure, trusted (i.e., auditable), and controlled (i.e., minimally permissive) manner. Build the information system on top of the Vendia Share platform, which
        supports data exchange through an immutable, cryptographically verifiable, distributed ledger and provides the primitives to control data flow (e.g., redaction).</p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">The project had no limitations on technology stack other than the requirement of utilizing Vendia for the data storage. The client provided
        a list of use-case requirements for our team to implement any way we saw fit. We utilized GitHub to track individual contributions, maintain version control, and allow simultaneous collabortaion through branching.
        We used React.js as our front-end interface as well as Bootstrap for our front-end styling framework. As mandated by our project requirements, we used Vendia as our back-end data storage solution and managed data flow using data ACLS and smart contracts. 
        </p>

        <p class="font-bold underline underline-offset-4">Use Case:</p>
        <p class="pt-2 pb-10">Pharma company “Bavaria'' is working with “Jane Hopkins Hospital”, on a phase 3 medical trial for a new antiviral medication involving ~100 patients. The trial is monitored by the FDA and
        focused on effectiveness. Researchers at Jane Hopkins have reviewed a set of patients that they intend to include in the study. They want to use a smart contract that the other parties can read to verify the
        eligibility criteria. Once a patient is “accepted” per smart contract, Jane Hopkins will share their record with Bavaria and the FDA. However, they will not share any personal information on file. Personal details
        would only be shared with the FDA, if an investigation was necessary, for example due to unexpected side effects.
        <br><br>
        With the anonymized list of eligible patients, but absent any further information, the FDA selects
        participants for the treatment and control group without sharing this information. Every dose is marked with a tracking code and a boolean “generic” flag by Bavaria. The FDA re-labels these doses with their own code
        and assigns them to individual patients before sending them to Jane Hopkins. Only the FDA has visibility into the tracking code mapping. This way, neither the treating physicians at Jane Hopkins, nor the researchers
        at Bavaria can determine which patient is in the control and treatment group until the study is complete. Throughout the study, Jane Hopkins tracks every treatment, including the tracking number and records the viral
        load of study participants weekly.
        <br><br>
        At the end of the study, the FDA shares the treatment/control group assignment with both Bavaria and Jane Hopkins to allow for study evaluation. At this point, Jane Hopkins also shares
          complete, anonymized patient records, so that Bavaria and the FDA can investigate whether certain medications or pre-existing medical conditions affected effectiveness in unexpected ways.
      </p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/167Rrn97PzXUTKCTyVaz4DugeojZA6SLfyK9MKtbZi0E/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>