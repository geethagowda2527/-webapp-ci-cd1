pipeline {
    agent any

    environment {
        APP_NAME = "webapp-ci-cd"
        DOCKER_COMPOSE_PATH = "/mnt/c/Users/darsh/user-data-app" // change if your path is different
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull code from your GitHub repo
                git branch: 'main', url: 'https://github.com/geethagowda2527/-webapp-ci-cd1.git'
            }
        }

        stage('Build & Deploy Docker') {
            steps {
                script {
                    // Navigate to project folder containing docker-compose.yml
                    dir("${DOCKER_COMPOSE_PATH}") {
                        // Stop any running containers
                        sh 'docker-compose down'

                        // Build and start containers
                        sh 'docker-compose up -d --build'
                    }
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    // Optional: check running containers
                    sh 'docker ps'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Web App built and deployed successfully!"
        }
        failure {
            echo "❌ Build or Deployment failed!"
        }
    }
}
