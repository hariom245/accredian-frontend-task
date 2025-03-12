pipeline{
    agent any
    environment{
        DOCKER_IMAGE="react"
    }
    tools{
        nodejs "Node20"
    }
    stages{
        stage('installation'){
            steps{
                echo "instlling plugins"
                sh "npm install"
            }
        }
        stage("docker image building"){
            steps{
                echo "buuuilding docker image"
                sh "docker build -t ${DOCKER_IMAGE}:latest ."
            }
        }
        stage("docker login"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'docker-cred',usernameVariable: DOCKER_USERNAME,passwordVariable: DOCKER_PASSWORD)]){
                echo "Docker login"
                 sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --pasword-stdin "
            }
          }
        }
        stage("docker push"){
            steps{
                sh "docker push  ${DOCKER_IMAGE}:latest"
            }
        }
    }
}
