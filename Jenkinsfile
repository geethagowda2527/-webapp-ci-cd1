pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/geethagowda2527/-webapp-ci-cd1.git'
            }
        }
        stage('Check Docker') {
            steps {
                bat 'docker --version'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t myapp:latest .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8080:8080 myapp:latest'
            }
        }
    }
}
