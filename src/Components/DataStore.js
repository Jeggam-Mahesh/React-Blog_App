import React,{ createContext,useState } from "react"


export const Store=createContext();

const DataStore=(props)=>{
   
    const [data,setData]=useState([
        {
                    id:1,
                    heading:'RRR',
                    image:'https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg',
                    discription:"RRR is an Indian Telugu-language epic action drama film released in 2022. It was directed by S. S. Rajamouli, who also co-wrote the film with V. Vijayendra Prasad.Starring N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris, RRR garnered huge success at the box office.",
                    category:'bollywood'
                },
                {
                    id:2,
                    heading:'Adhipurush',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvLFG9m87TOcMSQgf1zk-7dVHtKgPR-1YDw&usqp=CAU',
                    discription:`Thousands of years ago, the demon king Lankesh gets a boon from the god of creation Brahma that he could not be slain by Devas nor demons, thus making him invincible. Elsewhere, King Dashratha of Kosala exiles his son Raghava for 14 years to fulfill his promise to his wife Kaikeyi, Raghava's stepmother, that her son would take the throne. `,
                    category:'bollywood'
                },
                {
                    id:3,
                    heading:'Pushpa: The Rise',
                    image:'https://cdn.gulte.com/wp-content/uploads/2021/12/Review1.jpg',
                    discription:`In the 1990s, Pushpa Raj, a labourer, decides to smuggle red sandalwood, a rare wood in high demand that only grows in the Seshachalam Hills of the Chittoor district in Andhra Pradesh with his friend sidekick Kesava.`,
                    category:'bollywood'
                },
                {
                    id:4,
                    heading:'KGF',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_KVR32XhmWs_LV5z6PVcsSNk-6LraQm86w&usqp=CAU',
                    discription:`The film's development began in early 2015, after Neel finished writing the screenplay.[6] Filming began two years later, in January 2017. Most of the film is set in the Kolar Gold Fields and was filmed in locales such as Kolar, Mysore, and parts of North Karnataka.`,
                    category:'bollywood'

                   },
                {
                    id:5,
                    heading:'Bahubali',
                    image:'http://buzz.iloveindia.com/wp-content/uploads/2016/10/prabhas_bahubali_part_2-wide.jpg',
                    discription:"The film's story was written by Rajamouli's father V. Vijayendra Prasad, who randomly told him a story about Sivagami, a woman who carries a baby in her hand while crossing a river, and a few years later about Kattappa, which intrigued Rajamouli.",
                    category:'bollywood'
                },
                {
                    id:6,
                    heading:'Magadheera',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ108AIJSUZNjitU0wU9l4eA1M93yf9lLIA&usqp=CAU',
                    discription:`Magadheera was released on 31 July 2009 to critical acclaim and commercial success. It collected a distributors' share of ₹73.6 crore and gross collections of ₹150 crores at the end of its theatrical run. It became the highest-grossing Telugu film in history at that time.`,
                    category:'bollywood'
                },
                {
                    id:7,
                    heading:'Radhe Shyam',
                    image:'https://theredsparrow.in/wp-content/uploads/2022/03/Radhe-Shyam-FEB-25-STILL.jpg',
                    discription:`Radhe Shyam is a 2022 Indian period romantic drama film written and directed by Radha Krishna Kumar. Produced by UV Creations and T-Series, the film was shot simultaneously in Telugu and Hindi languages and stars Prabhas and Pooja Hegde. `,
                    category:'bollywood'
                },
                {
                    id:8,
                    heading:'Pathan',
                    image:'https://imgeng.jagran.com/images//2023/jan/Pathaan1675131195791.jpg',
                    discription:`Shah Rukh Khan's Pathaan continues to create a havoc at the box-office. The film has soared past the Rs 600 crore mark worldwide. The movie earlier garnered a lot of controversy and recently director Siddharth Anand opened up about the same. On the other hand, according to the reports, Janhvi Kapoor and Varun Dhawan's Bawaal has been postponed..`,
                    category:'bollywood'
                },
                {
                    id:9,
                    heading:'Shiddat: Journey Beyond Love',
                    image:'https://e0.pxfuel.com/wallpapers/504/216/desktop-wallpaper-must-watch-films-of-2021-movies-shiddat-movie.jpg',
                    discription:`Jaggi crosses the border illegally, intending to reach London, but get caught and taken back to the embassy [where Gautam works]. Jaggi explains to him that he has to reach London before Monday to his love, being inspired by Gautam's speech on reception day. The film flashes back to three months ago`,
                    category:'bollywood'
                },
                {
                    id:10,
                    heading:'Pokiri',
                    image:'https://d2zfbyesi0qka0.cloudfront.net/wp-content/uploads/2022/07/pokiri-movie.jpg',
                    discription:`In Hyderabad, two rival mafia gangs headed by Dubai-based don Ali Bhai and Narayana resort to criminal activities such as extortion, contract and coercion to take control of the city. The new DCP Sayyad Mohammad Pasha Qadri, focuses on making the city a better place by working on arresting all of them. Pandu, a thug working for money and living in Hyderabad along with his friends, is hired by Narayana to beat up Ali Bhai's henchmen Mallesh.`,
                    category:'bollywood'
                },
                {
                    id:11,
                    heading:'Major',
                    image:'https://m.media-amazon.com/images/M/MV5BNWRlYTFlYzgtMWM5My00Yzk2LTk5YTQtYzM5NGYyODQ4MTcyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
                    discription:`Based on the life of Major Sandeep Unnikrishnan, who was martyred in action during the November 2008 Mumbai attacks and was consequently awarded the Ashoka Chakra, India's highest peacetime gallantry award, on 26 January 2009.`,
                    category:'bollywood'
                },
                {
                    id:12,
                    heading:'Tiger Shroff and Hrithik Roshan in WAR.',
                    image:'https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/09/1569479180_warsocial.jpg',
                    discription:`It is revealed that Khalid's father Major Abdul Rahmani, betrayed the army in a previous mission, leaving Kabir with two gunshot wounds and his partner dead. Kabir then sought and killed Abdul for his betrayal`,
                    category:'bollywood'
                },
                {
                    id:13,
                    heading:'Super 30',
                    image:'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/06/05/Pictures/_82512c88-879b-11e9-ab40-33c30d629efb.jpg',
                    discription:`Based on the life of mathematics teacher and educator Anand Kumar as well as educational program of the same title, it is directed by Vikas Bahl and stars Hrithik Roshan as Anand Kumar. The film marked the last production of Phantom Films. It was released in cinemas on 12 July 2019.`,
                    category:'bollywood'
                },
                {
                    id:14,
                    heading:'Master',
                    image:'https://data1.ibtimes.co.in/en/full/732069/master-second-song.jpg',
                    discription:` In Chennai, John Durairaj (J.D) is a college lecturer beloved by his students for his student-friendly approach. He struggles with alcoholism and bitter dislike from fellow staff. J.D decides to uphold an election in the school on a bet with the college principal that stakes his dismissal from the college if the election were to fail. `,
                    category:'bollywood'
                },
                {
                    id:15,
                    heading:'Artificial Intelligence',
                    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Artificial_intelligence_prompt_completion_by_dalle_mini.jpg/225px-Artificial_intelligence_prompt_completion_by_dalle_mini.jpg',
                    discription:`Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of human beings or animals. AI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), and competing at the highest level in strategic games`,
                    category:'technology'
                },
                {
                    id:16,
                    heading:'Robotics',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcGqqhRj0idHinxPim2ZwnvahItl8-r_U-91Bqjqj3Kz3vbuP5I7XUpBmwkG0Cxm4AaI&usqp=CAU',
                    discription:`Robotics is an interdisciplinary branch of Electronics & Communication, computer science and engineering. Robotics involves the design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.`,
                    category:'technology'
                },
                {
                    id:17,
                    heading:'Computers',
                    image:'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSrLZUnNLXL07p7Augl0b5Euj7wKumYiKUI_smq6EKLbX7dEbSTLaVl4JpQat0cMlND',
                    discription:`A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks`,
                    category:'technology'
                },
                {
                    id:18,
                    heading:'Internet Of Things',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubF98X7b6yXLg6CpF1NXWxXHyYtBvSyTkSPrlcYgG72CUBA_JMDRpw60zIS17r4LIfps&usqp=CAU',
                    discription:`The Internet of things describes physical objects with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.`,
                    category:'technology'
                },
                {
                    id:19,
                    heading:'Quatum Computing',
                    image:'https://gmo-research.com/application/files/5716/6080/5815/Quantum_Computing_Image.png',
                    discription:`A quantum computer is a computer that exploits quantum mechanical phenomena. At small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior using specialized hardware`,
                    category:'technology'
                },
                {
                    id:20,
                    heading:'Automation',
                    image:'https://securityintelligence.com/wp-content/uploads/2023/04/Automation-Software-Technology-Process-System-Business-concept..jpeg',
                    discription:`Automation describes a wide range of technologies that reduce human intervention in processes, namely by predetermining decision criteria, subprocess relationships, and related actions, as well as embodying those predeterminations in machines.`,
                    category:'technology'
                },
                {
                    id:21,
                    heading:'Information Technology',
                    image:'https://news.workforce.com/wp-content/uploads/sites/2/2018/12/AI-is-coming-%E2%80%94-and-HR-is-not-prepared.jpg',
                    discription:`nformation technology is the use of computers to create, process, store, retrieve and exchange all kinds of data and information. IT forms part of information and communications technology.`,
                    category:'technology'
                },
                {
                    id:22,
                    heading:'Internet',
                    image:'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201307/20130718134421-0_0.jpg?itok=1MUCqw8Y',
                    discription:'The Internet is the global system of interconnected computer networks that uses the Internet protocol suite to communicate between networks and devices.',
                    category:'technology'
                },
                {
                    id:23,
                    heading:'Augumented Reality',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkWNdg4tUoCGv0JsjV7e5MJwU0osmT2vWb_elJT5aUf95Qa4XWfSZ4gMucmSsiiNdm3o&usqp=CAU',
                    discription:'Augmented reality is an interactive experience that combines the real world and computer-generated content. The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory',
                    category:'technology'
                },
                {
                    id:24,
                    heading:'Cybersecurity',
                    image:'https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2022/08/shutterstock_649992646-800x412.png',
                    discription:'Computer security, cyber security, digital security or information technology security is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized',
                    category:'technology'
                },{
                    id:25,
                    heading:'Nanotechnology',
                    image:'https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg',
                    discription:'Nanotechnology, often shortened to nanotech, is the use of matter on atomic, molecular, and supramolecular scales for industrial purposes.',
                    category:'technology'
                },{
                    id:26,
                    heading:'Biotechnology',
                    image:'https://futureoflife.org/wp-content/uploads/2016/09/biotech-regulations.jpg',
                    discription:'Biotechnology is a multidisciplinary field that involves the integration of natural sciences and engineering sciences in order to achieve the application of organisms, cells, parts thereof and molecular analogues for products and services',
                    category:'technology'
                },{
                    id:27,
                    heading:'Health Technology',
                    image:'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg',
                    discription:'Health technology is defined by the World Health Organization as the "application of organized knowledge and skills in the form of devices, medicines, vaccines, procedures, and systems developed to solve a health problem and improve quality of lives".',
                    category:'technology'
                },{
                    id:28,
                    heading:'Chat GPT',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd6a0k7cUdK-MP2I81y9a8PFVxJEcPj2vPA&usqp=CAU',
                    discription:'ChatGPT works through its Generative Pre-trained Transformer, which uses specialized algorithms to find patterns within data sequences. ChatGPT uses the GPT-3 language model, a neural network machine learning model and the third generation of Generative Pre-trained Transformer.',
                    category:'technology'
                },{
                    id:29,
                    heading:'Avatar: The Way of Water',
                    image:'https://net.kidzsearch.com/wp-content/uploads/2022/06/Avatar-2.webp',
                    discription:`On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world`,
                    category:'hollywood'
                },{
                    id:30,
                    heading:'The Matrix',
                    image:'https://i.ytimg.com/vi/ipHTAGNh4Qo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAhaNVcRiDk96y4iIr_RkMj-SsFcQ',
                    discription:`Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus.`,
                    category:'hollywood'
                },{
                    id:31,
                    heading:'The Pirates of Sillicon Valley',
                    image:'https://qph.cf2.quoracdn.net/main-qimg-cb8e0dfcf340cf64db97ab0d0fb35ec1.webp',
                    discription:`The accomplishments of visionaries Steve Jobs (Noah Wyle) and Bill Gates (Anthony Michael Hall) revolutionize the 20th century.`,
                    category:'hollywood'
                },{
                    id:32,
                    heading:'Ex Machina',
                    image:'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/A24-Sci-Fi-Featured-Image.jpg',
                    discription:`Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava`,
                    category:'hollywood'
                },{
                    id:33,
                    heading:'2001:Space Odyssey',
                    image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvfAM066WHsduq5axPuWmdhXKYEEMjtSV8s14kAEQtXTufoQMo',
                    discription:'An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. ',
                    category:'hollywood'
                },{
                    id:34,
                    heading:'The Terminator',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXy8ZTvWn6F8eEytN5b2PoneU9Get2nR52MiuFNrBCpp6EZSVVyTIbuRkP3w7Rw89Wq4&usqp=CAU',
                    discription:'Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust',
                    category:'hollywood'
                },{
                    id:35,
                    heading:'Blade Runner',
                    image:'https://pop.h-cdn.co/assets/17/39/1600x900/hd-aspect-1506522430-2049.jpg',
                    discription:`Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.`,
                    category:'hollywood'
                },{
                    id:36,
                    heading:'WarGames',
                    image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHyB2Z6BdaSlAHcYdO0riVrpJ-PIxiAt1V8FyKNi5BLaYCpgpx',
                    discription:`High school student David Lightman (Matthew Broderick) unwittingly hacks into a military supercomputer while searching for new video games. After starting a game of Global Thermonuclear War, Lightman leads the supercomputer to activate the nation's nuclear arsenal in response to his simulated threat as the Soviet Union.`,
                    category:'hollywood'
                },{
                    id:37,
                    heading:'Transformers:The Rise of Beasts',
                    image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI57SDfast6h4qfKg96MFwAcQm7EPIPhGen-2c-IHNNhEKzm5g',
                    discription:`Optimus Prime and the Autobots take on their biggest challenge yet. When a new threat capable of destroying the entire planet emerges, they must team up with a powerful faction of Transformers known as the Maximals to save Earth.`,
                    category:'hollywood'
                },{
                    id:38,
                    heading:'Iron Man',
                    image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzFXKSHWb3-5LAMWLxGAB5HzqsefGX4eYINaSHLd9JDNRu-LiM',
                    discription: `A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors.`,
                    category:'hollywood'
                },{
                    id:39,
                    heading:'Hackers',
                    image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2VTL3EQNQZpqxrE97WXeyTWckd0TfRJXL7XD4GXXBJmDzdf8O',
                    discription:`A teenage hacker finds himself framed for the theft of millions of dollars from a major corporation. Master hacker Dade Murphy, aka Zero Cool, aka Crash Override, has been banned from touching a keyboard for seven years after crashing over 1,500 Wall Street computers at the age of 11`,
                    category:'hollywood'
                },{
                    id:40,
                    heading:'The Imitation Game',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OX3nnCexvNU309_rCIQNFScQL3e2l87PBpXEh5hjP9Y1xxeH',
                    discription:'n 1939, newly created British intelligence agency MI6 recruits Cambridge mathematics alumnus Alan Turing (Benedict Cumberbatch) to crack Nazi codes, including Enigma -- which cryptanalysts had thought unbreakable',
                    category:'hollywood'
                },{
                    id:41,
                    heading:'Prometheus',
                    image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQ3oPzdIbyHdNU6eZiqz0rJBaXGsU_6ThtBc7BqvK7KyKvzk8y',
                    discription:`The discovery of a clue to mankind's origins on Earth leads a team of explorers to the darkest parts of the universe. Two brilliant young scientists lead the expedition.`,
                    category:'hollywood'
                },{
                    id:42,
                    heading:'Pirates of Caribbean',
                    image:'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg',
                    discription:`Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.`,
                    category:'hollywood'
                },{
                    id:43,
                    heading:'Squat',
                    image:'https://thumbs.dreamstime.com/b/man-doing-front-barbell-squat-exercise-man-doing-front-barbell-squat-exercise-flat-vector-illustration-isolated-white-221928707.jpg',
                    discription:'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent, the hip and knee joints flex while the ankle joint dorsiflexes;',
                    category:'fitness'
                },{
                    id:44,
                    heading:'Push-up',
                    image:'https://www.fitnesseducation.edu.au/wp-content/uploads/2020/10/Pushups.jpg',
                    discription:'The push-up is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids',
                    category:'fitness'
                },{
                    id:45,
                    heading:'Lunge',
                    image:'https://hips.hearstapps.com/hmg-prod/images/lunge-mallory-creveling-trevor-raab-fitness-shoots-0240-1647378565.jpg?crop=0.600xw:0.901xh;0.218xw,0.0995xh&resize=1200:*',
                    discription:'A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.',
                    category:'fitness'
                },{
                    id:46,
                    heading:'Walking',
                    image:'https://apollohealthlib.blob.core.windows.net/health-library/2021/04/shutterstock_788590396-scaled.jpg',
                    discription:`Walking is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. Walking is defined by an 'inverted pendulum' gait in which the body vaults over the stiff limb or limbs with each step`,
                    category:'fitness'
                },{
                    id:47,
                    heading:'Plank',
                    image:'https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=0.668xw:1.00xh;0.117xw,0&resize=1200:*',
                    discription:'The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time',
                    category:'fitness'
                },{
                    id:48,
                    heading:'Bent-over-row',
                    image:'https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg',
                    discription:'A bent-over row is a weight training exercise that targets a variety of back muscles. Which ones are targeted varies on form. The bent over row is often used for both bodybuilding and powerlifting.',
                    category:'fitness'
                },
                {
                    id:49,
                    heading:'Glute Bridge',
                    image:'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Glute-Bridge_600x600.png?v=1655224288',
                    discription:'The glute bridge is good for the muscles in the back of the body, known as the posterior chain. How to do it: Lie on the back with the knees bent and the feet',
                    category:'fitness'
                },{
                    id:50,
                    heading:'Side Plank',
                    image:'https://www.verywellfit.com/thmb/A1z9-W6J0hS9ecLogzjeICmoZiM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/forearm-side-plank-21e258a23b2245a1a29905a9d6a782a7.png',
                    discription:`Side planks. A healthy body requires a strong core at its foundation, so don't neglect core-specific moves like the side plank`,
                    category:'fitness'
                },{
                    id:51,
                    heading:'Jumping jack',
                    image:'https://www.shutterstock.com/image-vector/sequence-girl-doing-jumping-jack-260nw-1728830284.jpg',
                    discription:'A jumping jack, also known as a star jump and called a side-straddle hop in the US military, is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead, sometimes in a clap, and then returning to a position with the feet together and the arms at the sides',
                    category:'fitness'
                },{
                    id:52,
                    heading:'Tricep-push-up',
                    image:'https://media.stack.com/stack-content/uploads/2016/02/11222226/7-Tricep-Push-Ups-That-Will-Build-Massive-Arms-STACK.jpg',
                    discription:'You can also elevate the hands on a step or platform to decrease the intensity of the exercise. To modify, you can remove the pushup portion of the burpee',
                    category:'fitness'
                },{
                    id:53,
                    heading:'Pull-up',
                    image:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528',
                    discription:'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands, gripping a bar or other implement at a distance typically wider than shoulder-width, and pulled up.',
                    category:'fitness'
                },{
                    id:54,
                    heading:'Strengthand Balance Exercises',
                    image:'https://dressageridertraining.com/wp-content/uploads/2019/07/7-exercises-to-improve-lower-body-strength-and-balance-3.jpg',
                    discription:'No matter your age, you can find activities that meet your fitness level and needs! On this page: Endurance; Strength; Balance; Flexibility. Endurance exercises .',
                    category:'fitness'
                },{
                    id:55,
                    heading:'Bird Dog',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBjFwex58g61tQP1r1JCh1WOcYWWFg1QtTg&usqp=CAU',
                    discription:'A full-body move that requires balance and stability, the Bird Dog pose is easily scalable to your ability level. Start with this version if you’re a beginner.',
                    category:'fitness'
                },{
                    id:56,
                    heading:'Bicycle crunch',
                    image:'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-Exercises-How_To_Do_A_Bicycle_Crunch-Step_By_Step_6?fmt=auto&h=545&w=1440&sm=c&qlt=default&$qlt$&$poi$',
                    discription:`Bicycle crunches can help tone your midsection and slim your waist. Because bicycle crunches require more leg movement than standard crunches, they're also great for improving stability, flexibility and coordination. They are also a great move to strengthen your entire core`,
                    category:'fitness'
                },{
                    id:57,
                    heading:'Ice cream cake',
                    image:'https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Sweet-Homemade-Chocolate-Ice-Cream-Cake-500x375.jpg',
                    discription:'An ice cream cake is a cake with ice cream as the filling for a swiss roll or a layer cake. A simpler no-bake version can be made by layering different flavors of ice cream in a loaf pan. Ice cream cake is a popular party food, often eaten at birthdays',
                    category:'food'
                   
                },{
                    id:58,
                   
                    heading:'Hyderabad Chicken Biryani',
                    image:'https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg',
                    discription:`There are two main varieties of the dish – kachchi (raw) and pakki (cooked). It is said that Hyderabadi biryani's richness of flavor is due to the unique process of cooking raw rice and raw meat together with exotic spices, unlike other places where meat and rice are cooked separately.`,
                    category:'food'
                },{
                    id:59,
                    heading:'Poori',
                    image:'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Farrukh_Aziz_Ansari/Bedmi_Poori.jpg',
                    discription:'Puri is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes',
                    category:'food'
                },{
                    id:60,
                    heading:'Burger',
                    image:'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886',
                    discription:`A grilled beef patty on a bun is called a burger. Lunch at a fast food restaurant often consists of a burger and fries. You can use the word burger as a casual shorthand for hamburger, which is ground or minced beef that's fried and served on a bun.`,
                    category:'food'
                },{
                    id:61,
                    
                    heading:'Fruits',
                    image:'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                    discription:'A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check',
                    category:'food'

                },{
                    id:62,
                    heading:'Hyderabadi Double ka Meetha',
                    image:'https://i.ytimg.com/vi/iKG5DcQW1bI/maxresdefault.jpg',
                    discription:'Double ka meetha also known as Shahi Tukra, is an Indian bread pudding sweet made of fried bread slices soaked in hot milk with spices, including saffron and cardamom. Double ka meetha is a dessert of Hyderabad. It is popular in Hyderabadi cuisine, served at weddings and parties',
                    category:'food'
                },{
                    id:63,
                    heading:'Sea food',
                    image:'https://c.ndtvimg.com/2021-02/9e8j71q_grilled-fish_625x300_10_February_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
                    discription:`Fish and other seafood may be humanity’s most important food, after cereals, furnishing about 15 percent of the world population’s protein intake. Lean fish muscle provides 18–25 percent protein by weight, the equivalent of beef or poultry, but is much lower in calories.`,
                    category:'food'
                },{
                    id:64,
                    heading:'Peanut Butter with Bread',
                    image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/10/15/0/EA1112_Peanut_Butter.jpg.rend.hgtvcom.616.462.suffix/1382375731291.jpeg',
                    discription:'When you use peanut butter in your breakfast, you fuel your body with protein, fiber, and good fats to keep you going until lunchtime. Peanut butter pairs well with pretty much everything from fruits to chocolate to jelly and the list goes on. It is ideal for breakfast and there are lots of way to use it.',
                    category:'food'
                },{
                    id:65,
                    heading:'Momos',
                    image:'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
                    discription:'Momo is a type of steamed filled dumpling originating in Tibet. It is also popular in neighbouring Bhutan and India. Momo is usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines.',
                    category:'food'
                   
                },{
                    id:66,
                    heading:'Pizza',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ogaaSe6tbzV7D16YPj-oXRq3hO9v5ArcgQ&usqp=CAU',
                    discription:`Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven`,
                    category:'food'
                },{
                    id:67,
                    heading:'Pasta',
                    image:'https://img.buzzfeed.com/buzzfeed-static/static/2017-09/3/10/asset/buzzfeed-prod-fastlane-02/sub-buzz-25619-1504450339-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
                    discription:'Pastas are divided into two broad categories: dried (pasta secca) and fresh (pasta fresca). Most dried pasta is produced commercially via an extrusion process, although it can be produced at home. Fresh pasta is traditionally produced by hand, sometimes with the aid of simple machines.',
                    category:'food'
                },{
                    id:68,
                    heading:'leafy Vegetables recipes',
                    image:'https://www.shape.com/thmb/8rLmRn_th0Up7-2QY7QnSYJioG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/leafy-green-recipe-promo-f441e655e8ee48218a4b11da1241be47.jpg',
                    discription:`Green Vegetables is one most important and vital ingredient that we need to include in our diet. They are highly nutritious and provide fiber, essential vitamins and minerals like iron, calcium and magnesium added to any meal. Indian cuisine is popularly known for using a wide variety of green vegetables in their cooking`,
                    category:'food'
                },{
                    id:69,
                    heading:'Dry Fruits',
                    image:'https://5.imimg.com/data5/SELLER/Default/2021/2/CG/PM/KH/27496227/8f704633-6d5e-4d8b-9f49-fff8ecfc95f9.jpg',
                    discription:'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators',
                    category:'food'
                },{
                    id:70,
                    heading:'Popcorn',
                    image:'https://media.30seconds.com/tip/lg/Popcorn-Recipes-19-Ways-to-Flavor-This-Healthy-Snack-11198-760efbf6a4-1482341259.jpg',
                    discription:`
                    There are a few health benefits to eating popcorn. In addition to being high in fiber, popcorn also contains phenolic acids, a type of antioxidant. In addition, popcorn is a whole grain, an important food group that may reduce the risk of diabetes, heart disease, and hypertension in humans.`,
                    category:'food'
                }


    ]);
    return (
        <Store.Provider value={[data,setData]}>
        {props.children}
        </Store.Provider>
    )
}
export default DataStore