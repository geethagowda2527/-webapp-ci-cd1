pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = "${WORKSPACE}/docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https:/geethagowda2527/github.com//webapp-ci-cd1.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE} down"
                sh "docker-compose -f ${DOCKER_COMPOSE} up -d --build"
            }
        }
    }

    post {
        success { echo "Deployment Successful!" }
        failure { echo "Deployment Failed!" }
    }
}
