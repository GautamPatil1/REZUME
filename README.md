# REZUME - A Simple Resume Hosting Website

![rezume](/rezume.png)

Rezume is a web application built with React and Firebase, designed to simplify the process of hosting and sharing resumes. With Rezume, users can create personalized URLs to showcase their resumes online. Here are some key features:

Features
--------

- **Personalized URLs**: Users can create custom URLs (e.g., `rezume.live/username`) for their resumes, making it easy to share their professional profiles with others.

- **Easy Resume Hosting**: Rezume seamlessly integrates with Firebase, allowing users to upload their resumes to Firebase Storage and retrieve them quickly whenever needed.

- **User-Friendly Interface**: The React-based interface provides a smooth user experience, making it simple for users to navigate and interact with the application.

- **Efficient CI/CD Pipeline**: Rezume implements a Continuous Integration (CI) and Continuous Deployment (CD) pipeline using GitHub Actions. This ensures that changes made to the master branch are automatically deployed, keeping the application up-to-date.

- **Optimized Docker Image**: Utilizing multi-stage Docker builds, Rezume optimizes the creation process of Docker images, resulting in reduced image size and improved performance.

- **Scalable Deployment with Kubernetes**: Rezume is hosted on a minikube cluster deployed on Google Cloud Platform (GCP), leveraging Kubernetes for scalability and reliability.

- **Secure Authentication**: Firebase Authentication is used to secure user accounts and ensure that only authorized users can access and manage their resumes.

- **Responsive Design**: Rezume is built with responsive design principles, ensuring that the application looks and functions well across various devices and screen sizes.

- **Customizable Templates**: Users have the option to choose from a selection of resume templates or customize their own to best showcase their skills and experiences.

- **Version Control**: With GitHub integration, users can easily track changes to their resumes, facilitating collaboration and version control.
