# uSoftware-bayern-back
## Why this project was created?
At the second year of my bachelor in information systems degree, a great company from the chemical and pharmaceutical field named Bayer challenged the whole second year of my university to create a new software to help in their talent aquisition process.

## What Kind Of Help did They Need?
As Bayer is a really huge company that spreads itself all around the globe, every time time that a job oportunity comes up a impossible ammount of resumes are sent to the human resources department. Obviusly, the department can't deal with that huge ammount of resumes and the result is that more than 90% of all applyers don't even have you resume analyzed.

Given this context, our solution has to help the company in any way we consider useful!

## What Solution did We Proposed?
Our group had several interviews with the bayern's team, from all problems that they told us, we decided that the problem that we'll solve is the curriculum analysis. We basically want to give the human resouce department the capacity to analyze as many resumes as are sent to them.

## What Technologies did We Use?
- Our backend is as REST API, so we decided to use <b>node.js</b>;
- Our frontend was developed in <b>react.js</b>
- As some developers from our group already worked with Microsoft's Technology, we decided to go with <b>SQL Server</b> as our <b>relational database</b>
- Everything we're deployed in <b>Azure</b>, the microsoft cloud enviroment.
- It's important to note that we used <b>Azure Devops</b> to organize our work, tasks and etc.

## How does our Architecture Works?
![Alt text](https://github.com/AlmeidaIgorCarlos/uSoftware-bayer-back/blob/master/docs/uSoftware-bayern-back.png)

## From the Point of View of User, What does our Application do?

We've developed a web application that replaces the usual Bayer's portal. Our goal is to once the user signs up in our system, the user will insert your resume and apply for one of the jobs opportunities that were inserted by one of the human resources employees.

So the system works like a marketplace, from one side we have employees inserting job opportunities and by the other side we have applyers inserting your resumes and applying for jobs.

But how the system helps employees to select the right candidates? When they're going to insert the jobs, they also insert the requirements for that jobs, so our system can relates the job requirements with the skills from the applyers' resume.

## Database Model

As we used a relational database, we designed our data model as the following image demonstrates:

![Alt text](https://github.com/AlmeidaIgorCarlos/uSoftware-bayer-back/blob/master/docs/database/model.png)

## Use Case Diagram

In the software engineering we use a visual notation to project softwares, it's called UML. One of the most incredible tools that I really like to use in my projects is use case diagram, I apologize because the following use case diagram is in portuguese...


![Alt text](https://github.com/AlmeidaIgorCarlos/uSoftware-bayer-back/blob/master/docs/use-case-diagram.png)
