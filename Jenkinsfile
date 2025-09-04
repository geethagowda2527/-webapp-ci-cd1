pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker --version'
                bat 'docker build -t app_webapp .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 80:80 app_webapp'
            }
        }
    }
}
