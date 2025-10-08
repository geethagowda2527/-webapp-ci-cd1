pipeline {
    agent any

    stages {
        stage('Cleanup Old Containers') {
            steps {
                sh 'docker rm -f webapp || true'
                sh 'docker rm -f mongo || true'
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/geethagowda2527/-webapp-ci-cd1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo '✅ WebApp successfully built and deployed!'
        }
        failure {
            echo '❌ Build failed. Check logs for errors.'
        }
    }
}
