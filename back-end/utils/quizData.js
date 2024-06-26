export const quizData = [
    {
        "category": "Programming",
        "questions": [
            {
                "q1": "What is the output of `print(2**3)` in Python?",
                "options": ["5", "6", "8", "9"],
                "correctAnswer": "8"
            },

            {
                "q2": "Which language is primarily used for web development?",
                "options": ["C++", "Java", "JavaScript", "Python"],
                "correctAnswer": "JavaScript"
            },

            {
                "q3": "Which of the following is a Python data type?",
                "options": ["list", "set", "tuple", "All of the above"],
                "correctAnswer": "All of the above"
            },

            {
                "q4": "What does HTML stand for?",
                "options": ["HyperText Markup Language", "HyperText Markdown Language", "HyperTransfer Markup Language", "None of the above"],
                "correctAnswer": "HyperText Markup Language"
            },

            {
                "q5": "Which symbol is used for comments in JavaScript?",
                "options": ["//", "#", "/*", "<!--"],
                "correctAnswer": "//"
            },

            {
                "q6": "Which method can be used to find the length of a string in JavaScript?",
                "options": ["length()", "size()", "len()", "count()"],
                "correctAnswer": "length()"
            },

            {
                "q7": "Which keyword is used to create a class in Java?",
                "options": ["class", "Class", "define", "new"],
                "correctAnswer": "class"
            },

            {
                "q8": "Which function is used to read input from the user in Python?",
                "options": ["input()", "read()", "scanf()", "get_input()"],
                "correctAnswer": "input()"
            },

            {
                "q9": "What is the correct way to create an object in JavaScript?",
                "options": ["var obj = {}", "var obj = []", "var obj = ()", "var obj = <>"],
                "correctAnswer": "var obj = {}"
            },

            {
                "q10": "Which keyword is used to declare a constant in JavaScript?",
                "options": ["constant", "var", "let", "const"],
                "correctAnswer": "const"
            }
        ]
    },

    {
        "category": "DevOps",
        "questions": [
            {
                "q1": "What does CI/CD stand for in DevOps?",
                "options": ["Continuous Integration/Continuous Deployment", "Continuous Integration/Continuous Development", "Continuous Improvement/Continuous Development", "Continuous Implementation/Continuous Delivery"],
                "correctAnswer": "Continuous Integration/Continuous Deployment"
            },
            {
                "q2": "Which tool is commonly used for configuration management?",
                "options": ["Jenkins", "Docker", "Kubernetes", "Ansible"],
                "correctAnswer": "Ansible"
            },
            {
                "q3": "Which DevOps practice focuses on reducing deployment time?",
                "options": ["Continuous Integration", "Continuous Deployment", "Continuous Monitoring", "Continuous Planning"],
                "correctAnswer": "Continuous Deployment"
            },
            {
                "q4": "Which of the following tools is used for container orchestration?",
                "options": ["Jenkins", "Kubernetes", "Ansible", "Puppet"],
                "correctAnswer": "Kubernetes"
            },
            {
                "q5": "What is the purpose of a load balancer in DevOps?",
                "options": ["To increase server storage", "To distribute network or application traffic", "To monitor system performance", "To automate deployment processes"],
                "correctAnswer": "To distribute network or application traffic"
            },
            {
                "q6": "Which of the following is a continuous monitoring tool?",
                "options": ["Nagios", "Jenkins", "Docker", "Terraform"],
                "correctAnswer": "Nagios"
            },
            {
                "q7": "What is the main advantage of using Infrastructure as Code (IaC)?",
                "options": ["It requires no code", "It automates infrastructure setup", "It provides GUI tools", "It is used for network security"],
                "correctAnswer": "It automates infrastructure setup"
            },
            {
                "q8": "Which tool is primarily used for continuous integration?",
                "options": ["Ansible", "Nagios", "Jenkins", "Docker"],
                "correctAnswer": "Jenkins"
            },
            {
                "q9": "What is the main purpose of using Docker in DevOps?",
                "options": ["To automate configuration management", "To enable continuous integration", "To provide a platform for containerization", "To monitor system performance"],
                "correctAnswer": "To provide a platform for containerization"
            },
            {
                "q10": "Which of the following is a version control system?",
                "options": ["Git", "Kubernetes", "Docker", "Jenkins"],
                "correctAnswer": "Git"
            }
        ]
    },

    {
        "category": "Docker",
        "questions": [
            {
                "q1": "Which command is used to list all Docker containers?",
                "options": ["docker ls", "docker ps", "docker list", "docker containers"],
                "correctAnswer": "docker ps"
            },
            {
                "q2": "What is the default Docker network?",
                "options": ["host", "bridge", "none", "overlay"],
                "correctAnswer": "bridge"
            },
            {
                "q3": "Which file is used to define a multi-container Docker application?",
                "options": ["Dockerfile", "docker-compose.yml", "Dockerfile.yml", "compose.yml"],
                "correctAnswer": "docker-compose.yml"
            },
            {
                "q4": "What is the purpose of the Dockerfile?",
                "options": ["To build Docker images", "To run Docker containers", "To create Docker networks", "To manage Docker volumes"],
                "correctAnswer": "To build Docker images"
            },
            {
                "q5": "Which command is used to build a Docker image?",
                "options": ["docker run", "docker build", "docker create", "docker compose"],
                "correctAnswer": "docker build"
            },
            {
                "q6": "Which of the following is a Docker orchestration tool?",
                "options": ["Docker Compose", "Docker Hub", "Docker Swarm", "Docker Machine"],
                "correctAnswer": "Docker Swarm"
            },
            {
                "q7": "Which command is used to remove a Docker container?",
                "options": ["docker delete", "docker remove", "docker rm", "docker rmi"],
                "correctAnswer": "docker rm"
            },
            {
                "q8": "Which command is used to push an image to Docker Hub?",
                "options": ["docker push", "docker upload", "docker commit", "docker deploy"],
                "correctAnswer": "docker push"
            },
            {
                "q9": "What is the command to run a container in detached mode?",
                "options": ["docker run -d", "docker run -it", "docker run -v", "docker run -p"],
                "correctAnswer": "docker run -d"
            },
            {
                "q10": "Which command is used to log in to Docker Hub?",
                "options": ["docker login", "docker sign-in", "docker auth", "docker authenticate"],
                "correctAnswer": "docker login"
            }
        ]
    },

    {
        "category": "Linux",
        "questions": [
            {
                "q1": "Which command is used to list files in a directory?",
                "options": ["ls", "cd", "mkdir", "rm"],
                "correctAnswer": "ls"
            },
            {
                "q2": "What is the root directory in Linux?",
                "options": ["/", "/home", "/root", "/etc"],
                "correctAnswer": "/"
            },
            {
                "q3": "Which command is used to change the current directory?",
                "options": ["cd", "ls", "pwd", "mv"],
                "correctAnswer": "cd"
            },
            {
                "q4": "Which file in Linux contains user account information?",
                "options": ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/user"],
                "correctAnswer": "/etc/passwd"
            },
            {
                "q5": "Which command is used to display the contents of a file?",
                "options": ["cat", "ls", "cd", "mkdir"],
                "correctAnswer": "cat"
            },
            {
                "q6": "Which command is used to remove a directory in Linux?",
                "options": ["rmdir", "rm", "remove", "del"],
                "correctAnswer": "rmdir"
            },
            {
                "q7": "What is the purpose of the 'chmod' command?",
                "options": ["To change file permissions", "To change file owner", "To change file group", "To change file name"],
                "correctAnswer": "To change file permissions"
            },
            {
                "q8": "Which command is used to check disk usage in Linux?",
                "options": ["du", "df", "disk", "usage"],
                "correctAnswer": "du"
            },
            {
                "q9": "What does the 'grep' command do?",
                "options": ["Searches for patterns in files", "Displays file contents", "Deletes files", "Creates directories"],
                "correctAnswer": "Searches for patterns in files"
            },
            {
                "q10": "Which command is used to display the current directory path?",
                "options": ["pwd", "cd", "ls", "dir"],
                "correctAnswer": "pwd"
            }
            ]
    },

    {
        "category": "Cloud",
        "questions": [
            {
                "q1": "Which service model provides infrastructure as a service?",
                "options": ["IaaS", "PaaS", "SaaS", "DaaS"],
                "correctAnswer": "IaaS"
            },
            {
                "q2": "Which company offers AWS?",
                "options": ["Google", "Microsoft", "Amazon", "IBM"],
                "correctAnswer": "Amazon"
            },
            {
                "q3": "What does SaaS stand for?",
                "options": ["Software as a Service", "Storage as a Service", "Security as a Service", "System as a Service"],
                "correctAnswer": "Software as a Service"
            },
            {
                "q4": "Which cloud service provider offers Azure?",
                "options": ["Amazon", "Google", "Microsoft", "IBM"],
                "correctAnswer": "Microsoft"
            },
            {
                "q5": "What is the main purpose of a cloud load balancer?",
                "options": ["To store data", "To manage security", "To distribute network traffic", "To backup data"],
                "correctAnswer": "To distribute network traffic"
            },
            {
                "q6": "What is a primary advantage of cloud computing?",
                "options": ["Increased physical storage", "Scalability and flexibility", "Permanent data storage", "Local data access"],
                "correctAnswer": "Scalability and flexibility"
            },
            {
                "q7": "Which cloud service model is used for providing a runtime environment and development tools?",
                "options": ["IaaS", "PaaS", "SaaS", "BaaS"],
                "correctAnswer": "PaaS"
            },
            {
                "q8": "Which cloud provider offers Google Cloud Platform?",
                "options": ["Amazon", "Microsoft", "IBM", "Google"],
                "correctAnswer": "Google"
            },
            {
                "q9": "What does 'cloud elasticity' refer to?",
                "options": ["Fixed resource allocation", "Automatic scaling of resources", "Unchanging infrastructure", "Static data management"],
                "correctAnswer": "Automatic scaling of resources"
            },
            {
                "q10": "Which of the following is a cloud storage service?",
                "options": ["EC2", "S3", "Lambda", "RDS"],
                "correctAnswer": "S3"
            }
            ]
    }
]