# cyber-jobs-api
  
  code for cms

<---

  <!-- *** ADD OR EDIT HTML INSIDE OF THE dmRespCol DIVS, SEE DOCUMENTATION FOR GUIDELINES *** -->
<div dm:templateorder="170" class="dmHomeRespTmpl mainBorder dmRespRowsWrapper dmFullRowRespTmpl" id="1716942098">
 <!-- *** THIS IS FLEX - DO NOT CHANGE OR DELETE! *** -->
 <!--<div data-auto="flex-section" id="1507551858" data-flex-id="63bd85219866cc362278151e" data-layout-section="">
  <div class="flex-widgets-container" id="1865266723">
  </div>
</div>
--> 
 <!-- *** THIS IS FLEX - DO NOT CHANGE OR DELETE! *** -->
 <!--<div data-layout-section="" data-auto="flex-section" id="1444465892" data-flex-id="2c36feb1" data-page-element-type="section" data-page-element-source-id="64d427667bb743dbb30d493214251d8d===home" data-page-element-id="1586734294">
  <div class="flex-widgets-container" id="1197200602">
    <div class="dmNewParagraph" data-dmtmpl="true" data-element-type="paragraph" data-version="5" id="1096697975" data-uialign="center" style="" data-ai-tag="Tagline">
      <p class="text-align-center m-size-14 t-size-14 m-text-align-center size-15" style="letter-spacing: 0.1em;" no_space_b="true" no_space_e="true">
        <span class="m-font-size-14 t-font-size-14 font-size-15" m-font-size-set="true" t-font-size-set="true" style="font-weight: normal; display: unset; text-transform: uppercase;" no_space_b="true" no_space_e="true">
          tagline
        </span>
      </p>
    </div>
    <div class="dmNewParagraph" data-dmtmpl="true" data-element-type="paragraph" data-version="5" id="1085690980" data-uialign="center" style="" data-ai-tag="Section title">
      <h1 class="text-align-center" style="line-height: 1.2;">
        <span style="display: initial;" no_space_b="true" no_space_e="true">
          Cyber Security Jobs across Canada
        </span>
      </h1>
    </div>
    <div class="dmNewParagraph" data-dmtmpl="true" data-element-type="paragraph" data-version="5" id="1071182138" data-uialign="center" style="" data-ai-tag="Short description">
      <p class="text-align-center m-text-align-center" style="line-height: 1.5;" no_space_b="true" no_space_e="true">
        <span style="display: initial;" no_space_b="true" no_space_e="true">
          This is the text area for this paragraph. To change it, simply click and start typing. Once you've added your content, you can customize its design.
          <br/>
        </span>
      </p>
    </div>
  </div>
</div>
--> 
 <!-- *** THIS IS FLEX - DO NOT CHANGE OR DELETE! *** -->
 <!--<div data-auto="flex-section" id="1641784833" data-flex-id="63d24979f4a54e38542a8ab9" data-layout-section="">
  <div class="flex-widgets-container" id="1835502329">
    <div dmle_widget="html" data-element-type="html" class="dmCustomHtml u_3174124045" id="3174124045">
      <div id="cyber-jobs-container" style="max-width:1000px;margin:40px auto;font-family:Arial, sans-serif;">
        <h2 style="text-align:center;margin-bottom:20px;">
          Cyber Security Jobs Across Canada
        </h2>
        <!-- SEARCH + FILTER BAR -->        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-bottom:25px;">
          <input type="text" id="keywordInput" placeholder="Search job title (e.g. SOC Analyst)" style="padding:10px;width:260px;border-radius:6px;border:1px solid #ccc;"/>
          <select id="provinceSelect" style="padding:10px;border-radius:6px;border:1px solid #ccc;">
            <option value="" selected="selected">
            All Provinces
            </option>
            <option value="Ontario">
            Ontario
            </option>
            <option value="British Columbia">
            British Columbia
            </option>
            <option value="Alberta">
            Alberta
            </option>
            <option value="Manitoba">
            Manitoba
            </option>
            <option value="Quebec">
            Quebec
            </option>
          </select>
          <button onclick="loadCyberJobs()" style="padding:10px 18px;background:#000;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">
           Search Jobs
          </button>
        </div>
        <div id="jobs-list">
          Loading jobs...
        </div>
      </div>
      <script>
//<![CDATA[
async function loadCyberJobs() {
  const container = document.getElementById("jobs-list");
  const keyword = document.getElementById("keywordInput").value;
  const province = document.getElementById("provinceSelect").value;
  container.innerHTML = "Loading jobs...";
  try {
    const response = await fetch("https://cyber-job-omega.vercel.app/api/jobs");
    const data = await response.json();
    let jobs = data.results;
    if (!jobs || jobs.length === 0) {
      container.innerHTML = "<p>No cybersecurity jobs found at the moment.</p>";
      return;
    }
    // FILTER BY KEYWORD
    if (keyword) {
      jobs = jobs.filter(job =>
        job.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    // FILTER BY PROVINCE
    if (province) {
      jobs = jobs.filter(job =>
        job.location?.display_name?.includes(province)
      );
    }
    container.innerHTML = "";
    if (jobs.length === 0) {
      container.innerHTML = "<p>No matching jobs found.</p>";
      return;
    }
    jobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.style.border = "1px solid #e0e0e0";
      jobCard.style.padding = "20px";
      jobCard.style.marginBottom = "20px";
      jobCard.style.borderRadius = "10px";
      jobCard.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
      jobCard.style.backgroundColor = "#ffffff";
      jobCard.innerHTML = `
        <h3 style="margin:0 0 10px 0;color:#111;">${job.title}</h3>
        <p style="margin:5px 0;"><strong>Company:</strong> ${job.company?.display_name || "N/A"}</p>
        <p style="margin:5px 0;"><strong>Location:</strong> ${job.location?.display_name || "Canada"}</p>
        <p style="margin:5px 0;">
          <strong>Salary:</strong> ${
            job.salary_min
              ? "$" + job.salary_min.toLocaleString() + 
                (job.salary_max ? " - $" + job.salary_max.toLocaleString() : "")
              : "Not specified"
          }
        </p>
        <a href="${job.redirect_url}" target="_blank"
           style="display:inline-block;margin-top:12px;padding:10px 15px;background:#000;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;">
          View & Apply
        </a>
      `;
      container.appendChild(jobCard);
    });
  } catch (error) {
    container.innerHTML = "<p>Unable to load jobs right now.</p>";
    console.error("Error fetching jobs:", error);
  }
}
// Auto-load on page open
loadCyberJobs();
//]]>
      </script>
    </div>
  </div>
</div>
--> 
</div>   ---->
