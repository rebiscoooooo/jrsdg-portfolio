<?php
$message = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $messageText = trim($_POST['message'] ?? '');

    if (!$name || !$email || !$subject || !$messageText) {
        $error = 'Please fill out all fields before sending your message.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email address.';
    } else {

        $to = 'jrsaturno66@gmail.com';
        $email_subject = "Portfolio Contact: " . $subject;

        $email_body = "You have received a new message from your website contact form.\n\n";
        $email_body .= "Sender Details:\n";
        $email_body .= "Name: {$name}\n";
        $email_body .= "Email: {$email}\n\n";
        $email_body .= "Message:\n{$messageText}\n";

        $apiUrl = 'https://api.mailjet.com/v3.1/send';

        $apiKeyPublic = '18f00d5d52c54e14fb899ecdd46ae205';
        $apiKeyPrivate = '47fd4e2c4791ecbddfef9cd73dd175ef';
        
        $senderEmail = 'jrsaturno66@gmail.com'; 

        $postData = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => $senderEmail,
                        'Name' => 'Portfolio Contact'
                    ],
                    'To' => [
                        [
                            'Email' => $to,
                            'Name' => 'Jay-ar'
                        ]
                    ],
                    'ReplyTo' => [
                        'Email' => $email,
                        'Name' => $name
                    ],
                    'Subject' => $email_subject,
                    'TextPart' => $email_body
                ]
            ]
        ];

        $ch = curl_init($apiUrl);

        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_USERPWD, $apiKeyPublic . ":" . $apiKeyPrivate);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json'
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        curl_close($ch);

        if ($httpCode >= 200 && $httpCode < 300) {
            $message = 'Thank you, ' . htmlspecialchars($name) . '. Your message has been submitted successfully.';
        } else {
            $error = 'Sorry, our mail server is currently down. Please try again later.';
        }
    }
}

$projects = [
    [
        'title' => 'Personal Portfolio Website',
        'desc' => 'Designed and developed a responsive personal portfolio website using HTML, CSS, JavaScript, and Bootstrap to showcase my projects and skills.',
        'image' => './assets/images/portfolio.png',
        'link' => ''
    ],
    [
        'title' => 'Point of Sale System',
        'desc' => 'Developed a simple POS system using PHP and MySQL to manage inventory, sales, and customer data for a local business.',
        'image' => './assets/images/5.png',
        'link' => ''
    ],
    [
        'title' => 'User Inventory Management',
        'desc' => 'Created a user-friendly inventory management system using PHP and MySQL to track and manage product stocks and sales records.',
        'image' => './assets/images/6.png',
        'link' => ''
    ]
];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JRSDG | Full-Stack Developer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-uppercase tracking-wide" href="#hero">JRSDG</a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#blog">Blogs</a></li>
                    <li class="nav-item"><a class="nav-link" href="#project">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <section id="hero" class="min-vh-100 d-flex align-items-center pt-5 mt-5">
            <div class="container">
                <div class="row align-items-center gy-5 flex-column-reverse flex-lg-row">
                    <div class="col-lg-7 reveal">
                        <p class="section-title">Welcome to my world</p>
                        <h1 class="hero-title mb-3">Hi, I’m Jay-ar Saturno <br />De Guzman.</h1>
                        <p class="hero-subtitle mb-4">A Full-Stack Web Developer passionate about building responsive web applications with clean code, modern design, and optimized performance using PHP, JavaScript, and Bootstrap.</p>
                        <div class="d-flex flex-wrap gap-3 hero-buttons mb-5">
                            <a href="#contact" class="btn btn-primary">Let's Talk</a>
                            <a href="#project" class="btn btn-outline-light">View Work</a>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3 g-4 reveal" style="transition-delay: 0.2s;">
                            <div class="col">
                                <div class="card card-custom p-4 h-100 border-0">
                                    <h6 class="mb-3 text-uppercase text-primary fw-bold" style="letter-spacing: 1px;">Socials</h6>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2">
                                            <a class="text-decoration-none text-white hover-primary d-flex align-items-center" href="https://facebook.com/jayarsaturnodeguzman1" target="_blank" rel="noopener noreferrer">
                                                <i class="fa-brands fa-facebook fs-5 me-2"></i> Facebook
                                            </a>
                                        </li>
                                        <li class="mb-2">
                                            <a class="text-decoration-none text-white hover-primary d-flex align-items-center" href="https://www.instagram.com/_jaydgzmn.dev" target="_blank" rel="noopener noreferrer">
                                                <i class="fa-brands fa-instagram fs-5 me-2"></i> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-decoration-none text-white hover-primary d-flex align-items-center" href="https://www.tiktok.com/@paracetamol_rebiscooooo" target="_blank" rel="noopener noreferrer">
                                                <i class="fa-brands fa-tiktok fs-5 me-2"></i> TikTok
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-custom p-4 h-100 border-0">
                                    <h6 class="mb-4 text-uppercase text-primary fw-bold" style="letter-spacing: 1px;">Tech Stack</h6>
                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="skill-badge text-white">PHP</span>
                                        <span class="skill-badge text-white">JS</span>
                                        <span class="skill-badge text-white">CSS</span>
                                        <span class="skill-badge text-white">HTML</span>
                                        <span class="skill-badge text-white">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-custom p-4 h-130 border-0">
                                    <h6 class="mb-3 text-uppercase text-primary fw-bold" style="letter-spacing: 1px;">Contact</h6>
                                    <p class="mb-1 text-white">jrsaturno66@gmail.com</p>
                                    <p class="mb-2 text-white">+6396 1030 8393</p>
                                    <p class="mb-0 text-muted fs-6">Science City of Muñoz, PH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center reveal" style="transition-delay: 0.3s;">
                        <div class="hero-avatar-wrapper">
                            <?php
                            $avatarPath = 'assets/images/portrait.png';
                            $avatarExists = file_exists(__DIR__ . '/' . $avatarPath);
                            ?>
                            <?php if ($avatarExists): ?>
                                <img src="<?php echo $avatarPath; ?>" alt="JRSDG" class="hero-avatar-img">
                            <?php else: ?>
                                <img src="./assets/images/portrait.png" alt="JRSDG" class="hero-avatar-img">
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="bg-darker">
            <div class="container reveal">
                <div class="row gy-5 align-items-center">
                    <div class="col-lg-6">
                        <p class="section-title">Discover</p>
                        <h2 class="section-heading mb-4">About Me</h2>
                        <div class="section-light p-4 p-md-5">
                            <h3 class="h4 text-white mb-3">The Journey</h3>
                            <p class="text-muted">My name is <strong>Jay-ar Saturno De Guzman</strong>, a resident of Brgy. Villa Nati. Raised in a supportive home, my ambitions were always encouraged. This foundation pushed me to excel in technology, evolving into a full-stack developer and a certified <strong>Computer Systems Servicing (CSS) NCII</strong> professional.</p>
                            <p class="text-muted mb-0">My journey has been a roller coaster of sleepless nights and complex debugging—but every 'syntax error' became a lesson in perseverance. Today, I stand dedicated to building reliable digital solutions.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row g-4">
                            <div class="col-sm-6 reveal" style="transition-delay: 0.1s;">
                                <div class="feature p-4 p-md-5 h-100 text-center">
                                    <h4 class="h5 mb-3 text-primary fw-bold">CSS NCII</h4>
                                    <p class="mb-0 text-muted">Earned the National Certificate II after dedicated study and hands-on practice in computer systems.</p>
                                </div>
                            </div>
                            <div class="col-sm-6 reveal" style="transition-delay: 0.2s;">
                                <div class="feature p-4 p-md-5 h-100 text-center">
                                    <h4 class="h5 mb-3 text-primary fw-bold">ICT Journey</h4>
                                    <p class="mb-0 text-muted">Began with hardware assembly, maturing into full-stack development and complex problem solving.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="blog">
            <div class="container reveal">
                <div class="text-center mb-5 pb-3">
                    <p class="section-title">Articles</p>
                    <h2 class="section-heading">My Blogs</h2>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 reveal" style="transition-delay: 0.1s;">
                        <div class="card card-custom h-100 overflow-hidden border-0 p-2">
                            <img src="./assets/images/1.jpg" class="card-img-top blog-img rounded-4" alt="Blog 1" />
                            <div class="card-body p-4">
                                <h5 class="text-white mb-3">Work Immersion Deployment</h5>
                                <p class="text-muted mb-0">Stepping into the real world of Computer Systems Servicing and applying classroom skills in a live environment.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 reveal" style="transition-delay: 0.2s;">
                        <div class="card card-custom h-100 overflow-hidden border-0 p-2">
                            <img src="./assets/images/2.jpg" class="card-img-top blog-img rounded-4" alt="Blog 2" />
                            <div class="card-body p-4">
                                <h5 class="text-white mb-3">During Work Immersion</h5>
                                <p class="text-muted mb-0">Focused on structured cabling, network support, and practical hardware setup.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 reveal" style="transition-delay: 0.3s;">
                        <div class="card card-custom h-100 overflow-hidden border-0 p-2">
                            <img src="./assets/images/3.png" class="card-img-top blog-img rounded-4" alt="Blog 3" />
                            <div class="card-body p-4">
                                <h5 class="text-white mb-3">Programming Projects</h5>
                                <p class="text-muted mb-0">Created a simple C calculator and built a portfolio to showcase technical documentation and web skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="project" class="bg-darker">
            <div class="container reveal">
                <div class="text-center mb-5 pb-3">
                    <p class="section-title">Portfolio</p>
                    <h2 class="section-heading">My Projects</h2>
                </div>
                <div class="row g-4">
                    <?php foreach ($projects as $index => $p): ?>
                        <div class="col-lg-4 reveal" style="transition-delay: <?php echo 0.1 + ($index * 0.1); ?>s;">
                            <div class="card card-custom h-100 overflow-hidden border-0 p-2">
                                <a href="#" class="project-thumb d-block" data-title="<?php echo htmlspecialchars($p['title']); ?>" data-desc="<?php echo htmlspecialchars($p['desc']); ?>" data-image="<?php echo htmlspecialchars($p['image']); ?>" data-link="<?php echo htmlspecialchars($p['link']); ?>">
                                    <img src="<?php echo htmlspecialchars($p['image']); ?>" class="card-img-top blog-img rounded-4" alt="<?php echo htmlspecialchars($p['title']); ?>" />
                                </a>
                                <div class="card-body p-4 text-center">
                                    <h3 class="h5 text-primary mb-3 fw-bold"><?php echo htmlspecialchars($p['title']); ?></h3>
                                    <p class="text-muted mb-0"><?php echo htmlspecialchars($p['desc']); ?></p>
                                    <div class="mt-3">
                                        <button type="button" class="btn btn-sm btn-primary view-project" data-title="<?php echo htmlspecialchars($p['title']); ?>" data-desc="<?php echo htmlspecialchars($p['desc']); ?>" data-image="<?php echo htmlspecialchars($p['image']); ?>" data-link="<?php echo htmlspecialchars($p['link']); ?>">View</button>
                                        <?php if (!empty($p['link'])): ?>
                                            <a class="btn btn-sm btn-outline-light ms-2" href="<?php echo htmlspecialchars($p['link']); ?>" target="_blank" rel="noopener noreferrer">Visit</a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-darker border-0 text-white">
                    <div class="modal-header border-0">
                        <h5 class="modal-title" id="projectModalLabel"></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img id="projectModalImage" src="" alt="" class="img-fluid w-100 mb-3 rounded-2" />
                        <p id="projectModalDesc" class="text-muted"></p>
                    </div>
                    <div class="modal-footer border-0">
                        <a id="projectModalLink" class="btn btn-primary" href="#" target="_blank" rel="noopener noreferrer">Open Project</a>
                        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <section id="resume">
            <div class="container reveal">
                <div class="text-center mb-5 pb-3">
                    <p class="section-title">Experience</p>
                    <h2 class="section-heading">Resume</h2>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6 reveal" style="transition-delay: 0.1s;">
                        <div class="section-light h-100 p-5">
                            <h3 class="border-bottom border-secondary pb-4 mb-4 text-white">Education</h3>
                            <div class="mb-5">
                                <h5 class="text-primary fw-bold">Bachelor of Technical-Vocational Teacher Education</h5>
                                <p class="mb-2 text-white fw-bold">Central Luzon State University (2023 – Present)</p>
                                <p class="text-muted">Working on IT solutions, software development, and research-driven projects.</p>
                            </div>
                            <div>
                                <h5 class="text-primary fw-bold">ICT Senior High</h5>
                                <p class="mb-2 text-white fw-bold">Muñoz National High School (2021 – 2023)</p>
                                <p class="text-muted">Developed practical technology skills in hardware, networking, and software fundamentals.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 reveal" style="transition-delay: 0.2s;">
                        <div class="section-light h-100 p-5">
                            <h3 class="border-bottom border-secondary pb-4 mb-4 text-white">Work Experience</h3>
                            <div class="mb-5">
                                <h5 class="text-primary fw-bold">Technical Support</h5>
                                <p class="mb-2 text-white fw-bold">DESO Technical Support (2023 – 2024)</p>
                                <p class="text-muted">Provided support for election machine maintenance and critical IT operations.</p>
                            </div>
                            <div>
                                <h5 class="text-primary fw-bold">Layout Artist</h5>
                                <p class="mb-2 text-white fw-bold">Bloomingdales (2021 – 2023)</p>
                                <p class="text-muted">Designed visual layouts and supported publication-ready content with creative direction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="bg-darker">
            <div class="container reveal">
                <div class="row gy-5 align-items-center">
                    <div class="col-lg-5">
                        <p class="section-title">Reach Out</p>
                        <h2 class="section-heading mb-4">Get in Touch</h2>
                        <p class="text-muted mb-5">Ready to start your next project? Send me a message and let's discuss how we can collaborate to build something amazing.</p>

                        <div class="d-flex align-items-center mb-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-4 text-primary fs-4">📞</div>
                            <div>
                                <p class="mb-1 text-muted fw-bold text-uppercase" style="letter-spacing: 1px; font-size: 0.85rem;">Phone</p>
                                <p class="mb-0 text-white fw-bold fs-5">+6396 1030 8393</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-4 text-primary fs-4">✉️</div>
                            <div>
                                <p class="mb-1 text-muted fw-bold text-uppercase" style="letter-spacing: 1px; font-size: 0.85rem;">Email</p>
                                <p class="mb-0 text-white fw-bold fs-5">jrsaturno66@gmail.com</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-circle me-4 text-primary fs-4">📍</div>
                            <div>
                                <p class="mb-1 text-muted fw-bold text-uppercase" style="letter-spacing: 1px; font-size: 0.85rem;">Location</p>
                                <p class="mb-0 text-white fw-bold fs-5">Science City of Muñoz, PH</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 reveal" style="transition-delay: 0.2s;">
                        <div class="card card-custom p-4 p-md-5 border-0 shadow-lg">
                            <?php if ($error): ?>
                                <div class="alert alert-danger border-0" role="alert"><?php echo htmlspecialchars($error); ?></div>
                            <?php elseif ($message): ?>
                                <div class="alert alert-success border-0 bg-success text-white" role="alert"><?php echo htmlspecialchars($message); ?></div>
                            <?php endif; ?>

                            <form method="post" action="#contact">
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <label class="form-label text-muted fw-bold text-uppercase ms-1" style="font-size: 0.8rem; letter-spacing: 1px;">Name</label>
                                        <input class="form-control" type="text" name="name" value="<?php echo htmlspecialchars($_POST['name'] ?? ''); ?>" placeholder="Jay-ar S. De Guzman">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label text-muted fw-bold text-uppercase ms-1" style="font-size: 0.8rem; letter-spacing: 1px;">Email</label>
                                        <input class="form-control" type="email" name="email" value="<?php echo htmlspecialchars($_POST['email'] ?? ''); ?>" placeholder="jrsaturno66@gmail.com">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label text-muted fw-bold text-uppercase ms-1" style="font-size: 0.8rem; letter-spacing: 1px;">Subject</label>
                                        <input class="form-control" type="text" name="subject" value="<?php echo htmlspecialchars($_POST['subject'] ?? ''); ?>" placeholder="Project Inquiry">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label text-muted fw-bold text-uppercase ms-1" style="font-size: 0.8rem; letter-spacing: 1px;">Message</label>
                                        <textarea class="form-control" name="message" rows="5" placeholder="How can I help you?"><?php echo htmlspecialchars($_POST['message'] ?? ''); ?></textarea>
                                    </div>
                                    <div class="col-12 mt-5">
                                        <button class="btn btn-primary w-100 py-3 fs-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="py-5 text-center" style="background-color: var(--bg-darker); border-top: 1px solid var(--card-border);">
        <div class="container">
            <h4 class="text-white fw-bold mb-3 font-poppins">JRSDG</h4>
            <p class="text-muted mb-0 fs-6">&copy; <?php echo date('Y'); ?> <a href="https://www.facebook.com/jayarsaturnodeguzman1" class="text-decoration-none text-muted" target="_blank" rel="noopener noreferrer">Jay-ar Saturno De Guzman</a>. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/script.js"></script>
</body>

</html>
