pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/geethagowda2527/-webapp-ci-cd1.git',
                    credentialsId: 'github-pat'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose -f app/docker-compose.yml build'
            }
        }
        stage('Run Containers') {
            steps {
                sh 'docker-compose -f app/docker-compose.yml up -d'
            }
        }
    }
}
