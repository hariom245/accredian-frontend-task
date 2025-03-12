pipeline{
    agent any
    environment{
        DOCKER_IMAGE= "harimash/react-app:latest"
    }
    tools{
        nodejs "NODE20"
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
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage("docker login"){
            steps{
                withCredentials([usernamePassword('docker-cred',usernameVariable: DOCKER_USRENAME,passwordVariable: DOCKER_PASSWORD)])
                echo"Docker login"
                 sh "echo ${DOOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --pasword-stdin "
            }
        }
        stage("docker push"){
            steps{
                sh "docker push  ${DOCKER_IMAGE}"
            }
        }
    }
}
