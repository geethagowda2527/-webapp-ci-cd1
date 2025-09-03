pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t app_webapp .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5000:3000 --name webapp app_webapp'
            }
        }
    }
}
