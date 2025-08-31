# Collection: profiles

## Fields
| Field Name      | Type                | Required | Notes / Validation                                      |
|-----------------|---------------------|----------|--------------------------------------------------------|
| name            | String              | Yes      | Non-empty string                                       |
| email           | String              | Yes      | Valid email, unique                                    |
| education       | String              | No       | Max 500 characters                                     |
| skills          | Array of String     | Yes      | Each element must be a non-empty string                |
| projects        | Array of Object     | No       | Each object must have:<br>- title (String, required)<br>- description (String, required)<br>- link (String, required, valid URL) |
| workExperience  | Array of Object     | No       | Each object must have:<br>- jobTitle (String, required)<br>- company (String, required)<br>- location (String, required)<br>- startDate (Date, required)<br>- endDate (Date, required)<br>- description (String, max 1000 chars) |
| links           | Object              | Yes      | Must include:<br>- github (String, URL, required)<br>- linkedin (String, URL, required)<br>- portfolio (String, URL, optional) |

## Indexes
- **Unique index:** `email` → prevents duplicate profiles.
- **Optional text indexes:** `skills`, `projects.title`, `workExperience.jobTitle` → improves search functionality.

## Example Document
```json
{
	"name": "Prince Raj",
	"email": "prince@example.com",
	"education": "B.Tech in ECE",
	"skills": ["JavaScript", "Node.js", "MongoDB"],
	"projects": [
		{
			"title": "Chat App",
			"description": "Real-time chat application using Socket.io",
			"link": "https://github.com/prince/chat-app"
		}
	],
	"workExperience": [
		{
			"jobTitle": "Software Intern",
			"company": "Tech Corp",
			"location": "Bangalore, India",
			"startDate": "2024-06-01T00:00:00.000Z",
			"endDate": "2024-12-31T00:00:00.000Z",
			"description": "Worked on backend APIs using Node.js"
		}
	],
	"links": {
		"github": "https://github.com/prince",
		"linkedin": "https://linkedin.com/in/prince",
		"portfolio": "https://princeraj.dev"
	}
}
```