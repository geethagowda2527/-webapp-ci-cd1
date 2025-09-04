pipeline {
    agent any
    environment {
        PATH = "/usr/bin:/usr/local/bin:$PATH" // make sure docker is in PATH
    }
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker --version'
                sh 'docker build -t app_webapp .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 80:80 app_webapp'
            }
        }
    }
}
