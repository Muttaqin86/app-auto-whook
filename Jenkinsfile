pipeline {
    agent any

    stages {

        stage('Clone Check') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-webhook .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop cicd-webhook || true
                docker rm cicd-webhook || true

                docker run -d \
                  --name cicd-webhook \
                  -p 5050:4040 \
                  cicd-webhook
                '''
            }
        }

    }
}