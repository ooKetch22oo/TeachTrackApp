We are making a data collection app for teachers to collect and manage data about their students and class. The app provides customizable data collection options, automated data entry, an AI assistant, and data visualization tools to help teachers make informed decisions about their students' education. It is called TeachTrack. The following are the requirements for the app.


Functional Requirements:
- User-friendly Interface: The app should have a simple and intuitive interface that is easy for teachers to navigate and use.
- Customizable Data Collection: The app should allow teachers to customize the data they collect about their students and class. This could include things like attendance, grades, behavior, and other relevant information.
- Automated Data Entry: The app should have the ability to automatically enter data from various sources, such as online quizzes or assignments, to save teachers time and effort.
- AI Assistant: The app should feature an AI assistant that can detect trends and patterns in the data and provide suggestions to the teacher on how to further their student's education. For example, the AI assistant could suggest personalized learning plans or recommend resources for struggling students.
- Data Visualization: The app should provide visual representations of the data collected, such as graphs or charts, to help teachers easily identify trends and patterns.- Data Security: The app should have robust security measures in place to protect the sensitive data collected about students and ensure that it is only accessible to authorized users.

Non-functional Requirements:
- Performance: The app should be designed to perform efficiently and respond quickly to user requests.
- Scalability: The app should be scalable to accommodate a growing number of users and data.
- Security: The app should have robust security measures in place to protect the sensitive data collected about students and ensure that it is only accessible to authorized users. This includes measures like encryption, authentication, and access control.
- Compatibility: The app should be compatible with a variety of devices and platforms, including desktop and mobile devices and popular web browsers.
- Accessibility: The app should be accessible to users with disabilities, with features such as screen readers and keyboard navigation available to assist those with visual or mobility impairments.
- Maintainability: The app should be easy to maintain and update, with clear documentation and support resources available for developers and users.

User Roles and Permissions:
- The app will have three types of users: administrators, teachers, and Student/Parent users.  
- Administrators will have full access to all features and functionality of the app, including the ability to create and delete projects, tasks, and timelines, as well as manage user accounts and permissions.  
- Teacher users will have general access to the app, with permissions determined by the administrator. Regular users will be able to view and edit grades, tasks, and timelines.
- Student/Parent Users will have limited access to the app, with permissions determined by the administrator. Guest Users will be able to view grades, tasks, and timelines.

Data Management:
- The app will store project, task, and timeline data in a vector database.  
- Users will be able to create, edit, and delete projects, tasks, and timelines through the app's user interface.  
- The app will provide the ability to export project, task, and timeline data in various formats, such as CSV, Excell, or PDF.

Reporting and Analytics:
- The app should allow teachers to generate reports on student performance based on collected data.
- Reports should be customizable, allowing teachers to select specific data points to include.
- The app should provide visualizations of data to aid in analysis and decision-making.
- Reports should be exportable in various formats, such as HTML, PDF or Excel.


Integration Requirements
- The app should be able to integrate with existing school management systems.
- The app should be able to import and export data in various formats such as CSV and Excel.
- The app should be able to integrate with third-party tools such as Google Drive and Dropbox.

Reporting and Analytics: 
- The app should have a dashboard that displays key metrics such as student attendance and performance.
- The app should be able to generate customizable reports for teachers and administrators.
- The app should be able to provide insights and recommendations based on the data collected.


Constraints and Assumptions:
- The app will assume that teachers have access to the necessary technology to use the app, such as a smartphone or computer.
- The app will be designed to collect data on multiple classes at a time.
- The app will not collect any personally identifiable information about students.
- The app will comply with all relevant data privacy laws and regulations.
- The app will be designed to be user-friendly and intuitive, requiring minimal training for teachers to use effectively.
- The app will be designed to be scalable, allowing for the addition of new features and functionality in the future.
- The app should use Node.js and MongoDB for the backend, and React.js for the frontend.
- Use Expo for development and testing.
- Use Pinecone vector database for data storage and management.