var bio = {
	"name": "Noora Alrahili",
	"role": "Web Develober",
	"contacts": {
		"mobile": "0531822233",
		"email": "noora.rahili@gmail.com",
		"github": "noonym",
		"twitter": "@noonym",
		"location": "Riyadh, Saudi Arabia"
	},
	"welcomeMessage": "Carpe Diem",
	"skills": ["Self Learner", "Organized", "Multitasker"],
	"biopic": "images/Logo.png",
	"display": function() {

		//replacing %data%
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		//appending name and role
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		//appending contact info on header and footer
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		//appending welcome msg
		$("#header").append(formattedMsg);

		//appending bio picture
		$("#header").append(formattedPic);

		//skills manopulation
		$("#header").append(HTMLskillsStart);
		for (var x = 0; x < bio.skills.length; x++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs": [{
			"employer": "SAP",
			"title": "Trainee",
			"dates": "Dec 2016 - Feb 2017",
			"location": "An Nakhil, Riyadh",
			"description": "Young Professional Program"
		},
		{
			"employer": "Amjad Qurtubah Private School",
			"title": "Teacher",
			"dates": "Jan 2016 - Sep 2016",
			"location": "Qurtubah, Riyadh",
			"description": "Teaches computer for high school students"
		}
	],
	"display": function() {

		//appending WORK header
		$("#workExperience").append(HTMLworkStart);

		//replacing and appending jobs info
		for (var x = 0; x < work.jobs.length; x++) {
			var formattedEmloyer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);

			//formating emloyer and title at the same line
			var formattedEmloyerTitle = formattedEmloyer + formattedTitle;

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
			$(".work-entry:last").append(formattedEmloyerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [{
			"title": "Animal Trading Card",
			"dates": "Nov 2017",
			"description": "Designed a Card with my spirit animal using HTML and CSS",
			"images": ["images/card.png"]
		},
		{
			"title": "Portfolio Site",
			"dates": "Dec 2017",
			"description": "Designed my own Portfolio using HTML and CSS",
			"images": ["images/port.png"]
		}
	],
	"display": function() {

		//appending PROJECTS header
		$("#projects").append(HTMLprojectStart);

		//replacing and appending projects info
		for (var x = 0; x < projects.projects.length; x++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			//replacing and appending projects images
			for (var y = 0; y < projects.projects[x].images.length; y++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].images[y]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

var education = {
	"schools": [{
		"name": "Imam Mohammed Ibn Saud Islamic University",
		"location": "Riyadh",
		"degree": "Bachelor",
		"majors": ["Computer Sciences"],
		"dates": "2010 - 2015",
		"url": "http://imamu.edu.sa"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Develobment Nanodegree",
		"school": "Udacity",
		"dates": "Nov 2017 - Jan 2018",
		"url": "Udacity.com"
	}],
	"display": function() {

		//appending EDUCATION header
		$("#education").append(HTMLschoolStart);

		//replacing and appending schools info
		for (var x = 0; x < education.schools.length; x++) {
			var formattedName = HTMLschoolName.replace("%data%", education.schools[x].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);

			//formating name of school and degree at the same line
			var formattedNameDegree = formattedName + formattedDegree;

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);

			//replacing and appending schools majors
			for (var y = 0; y < education.schools[x].majors.length; y++) {
				var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[x].majors[y]);
				$(".education-entry:last").append(formattedMajors);
			}
		}

		//appending Online Courses header
		$(".education-entry:last").append(HTMLonlineClasses);
		//replacing and appending online courses info
		for (var x = 0; x < education.onlineCourses.length; x++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);

			//formating title and name at the same line
			var formattedTitleSchool = formattedTitle + formattedSchool;

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

$("#workExperience").click(function() {
	$(".work-entry").toggle("fast");
});
$("#projects").click(function() {
	$(".project-entry").toggle("fast");
});
$("#education").click(function() {
	$(".education-entry").toggle("fast");
});