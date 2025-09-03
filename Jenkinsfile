pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/geethagowda2527/webapp-ci-cd.git1'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
