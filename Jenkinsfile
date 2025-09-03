pipeline {
    agent any
    environment {
        // GitHub Personal Access Token stored in Jenkins Credentials
        GIT_CREDENTIALS = 'github-pat'
    }
    stages {
        stage('Clone Repo') {
            steps {
                // Clone your repository using PAT
                git branch: 'main', 
                    url: 'https://github.com/geethagowda2527/-webapp-ci-cd1.git', 
                    credentialsId: "${GIT_CREDENTIALS}"
            }
        }
        stage('Build Docker Image') {
            steps {
                // Use Windows bat commands instead of sh
                bat 'docker-compose build'
            }
        }
        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
