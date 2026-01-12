
    let Toggle = false; // Toggle starts out as false
    const button = document.getElementsByClassName("LightToggle")[0];

    button.addEventListener("click", () => // Check if button gets pressed
    {
        button.classList.toggle('active');
        if (Toggle === false) // If toggle is turned on it changes to LightMode
        {
            document.body.classList.add("Light");
            Toggle = true;
        }
        else // It remains as DarkMode
        {
            document.body.classList.remove("Light");
            Toggle = false;
        }
    });
    const SchoolButton = document.getElementsByClassName("SchoolExperience")[0]; /* Grabs the SchoolExperience button for the school button */
    const Grades = document.getElementsByClassName("Grades")[0] /* Grabs the Grades class */
    SchoolButton.addEventListener("click", () => 
    {
        Grades.classList.toggle("show");
    });

    const JobButton = document.getElementsByClassName("JobExperience")[0];
    const Job = document.getElementsByClassName("Job")[0]
    JobButton.addEventListener("click", () => 
    {
        Job.classList.toggle("show"); 
    });

    const InfoButton = document.getElementsByClassName("ContactInfo")[0];
    const Info = document.getElementsByClassName("Info")[0]
    InfoButton.addEventListener("click", () => 
    {
        Info.classList.toggle("show"); 
    });

    /*If button gets pressed then it will toggle hide on Title
    and it will also toggle show on pictures */
    const TitleButton = document.getElementsByClassName("SomethingElse")[0];
    const Title = document.getElementsByClassName("Title")[0]
    const splide = document.getElementsByClassName("splide")[0]
    TitleButton.addEventListener("click", () => 
    {
        Title.classList.toggle("hide");
        splide.classList.toggle("show");

    });
/* 
Tried to do it like in C# but it turns out to be complicated when the language is not the same
So there most likely was a way to make this way easier but it works.
*/