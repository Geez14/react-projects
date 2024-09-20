const menus = [
  {
    name: "Root",
    children: [
      {
        name: "Documents",
        children: [
          {
            name: "Resume.docx",
            size: 1024, // size in KB
          },
          {
            name: "CoverLetter.pdf",
            size: 512,
          },
          {
            name: "Projects",
            children: [
              {
                name: "Project1.zip",
                size: 2048,
              },
              {
                name: "Project2.rar",
                size: 1536,
              },
              {
                name: "Project3",
                children: [
                  {
                    name: "src",
                    children: [
                      {
                        name: "index.js",
                        size: 14,
                      },
                      {
                        name: "style.css",
                        size: 8,
                      },
                    ],
                  },
                  {
                    name: "README.md",
                    size: 6,
                  },
                  {
                    name: "LICENSE",
                    size: 4,
                  },
                ],
              },
            ],
          },
          {
            name: "Reports",
            children: [
              {
                name: "AnnualReport.pdf",
                size: 10240,
              },
              {
                name: "MonthlySummary.xlsx",
                size: 5120,
              },
              {
                name: "FinancialData.csv",
                size: 800,
              },
            ],
          },
        ],
      },
      {
        name: "Downloads",
        children: [
          {
            name: "Software.exe",
            size: 5000,
          },
          {
            name: "Music.zip",
            size: 3072,
          },
          {
            name: "Ebook.epub",
            size: 1500,
          },
          {
            name: "Games",
            children: [
              {
                name: "RPGGame.iso",
                size: 102400,
              },
              {
                name: "FPSGame.rar",
                size: 204800,
              },
              {
                name: "GamePatch.exe",
                size: 50000,
              },
            ],
          },
          {
            name: "Tutorials",
            children: [
              {
                name: "React_Tutorial.pdf",
                size: 800,
              },
              {
                name: "NextJS_Tutorial.mp4",
                size: 35000,
              },
              {
                name: "Docker_Guide.docx",
                size: 2000,
              },
            ],
          },
        ],
      },
      {
        name: "Pictures",
        children: [
          {
            name: "Vacation.jpg",
            size: 2000,
          },
          {
            name: "Family.png",
            size: 1500,
          },
          {
            name: "Screenshots",
            children: [
              {
                name: "Screenshot1.png",
                size: 800,
              },
              {
                name: "Screenshot2.png",
                size: 900,
              },
              {
                name: "Screenshot3.png",
                size: 1000,
              },
            ],
          },
          {
            name: "Wallpapers",
            children: [
              {
                name: "Beach.jpg",
                size: 2500,
              },
              {
                name: "Mountains.png",
                size: 3000,
              },
            ],
          },
        ],
      },
      {
        name: "Videos",
        children: [
          {
            name: "Movies",
            children: [
              {
                name: "Inception.mp4",
                size: 1500000, // size in KB (~1.5 GB)
              },
              {
                name: "Avatar.avi",
                size: 2000000,
              },
              {
                name: "Matrix.mkv",
                size: 1800000,
              },
            ],
          },
          {
            name: "Tutorials",
            children: [
              {
                name: "Python_Basics.mp4",
                size: 45000,
              },
              {
                name: "JavaScript_DeepDive.mp4",
                size: 75000,
              },
            ],
          },
          {
            name: "FamilyVideos",
            children: [
              {
                name: "Birthday.mp4",
                size: 100000,
              },
              {
                name: "Wedding.mp4",
                size: 125000,
              },
            ],
          },
        ],
      },
      {
        name: "Music",
        children: [
          {
            name: "Rock",
            children: [
              {
                name: "BohemianRhapsody.mp3",
                size: 7000,
              },
              {
                name: "HotelCalifornia.mp3",
                size: 6500,
              },
            ],
          },
          {
            name: "Pop",
            children: [
              {
                name: "Thriller.mp3",
                size: 7200,
              },
              {
                name: "BillieJean.mp3",
                size: 6800,
              },
            ],
          },
        ],
      },
      {
        name: "Music",
        children: [
          {
            name: "Rock",
            children: [
              {
                name: "ClassicRock",
                children: [
                  {
                    name: "BohemianRhapsody.mp3",
                    size: 7000,
                  },
                  {
                    name: "HotelCalifornia.mp3",
                    size: 6500,
                  },
                  {
                    name: "StairwayToHeaven.mp3",
                    size: 7100,
                  },
                ],
              },
              {
                name: "AlternativeRock",
                children: [
                  {
                    name: "Creep.mp3",
                    size: 5000,
                  },
                  {
                    name: "SmellsLikeTeenSpirit.mp3",
                    size: 6000,
                  },
                  {
                    name: "Wonderwall.mp3",
                    size: 5500,
                  },
                ],
              },
            ],
          },
          {
            name: "Pop",
            children: [
              {
                name: "TopHits",
                children: [
                  {
                    name: "ShapeOfYou.mp3",
                    size: 7400,
                  },
                  {
                    name: "BlindingLights.mp3",
                    size: 7300,
                  },
                  {
                    name: "Levitating.mp3",
                    size: 7200,
                  },
                ],
              },
              {
                name: "ClassicPop",
                children: [
                  {
                    name: "BillieJean.mp3",
                    size: 6800,
                  },
                  {
                    name: "Thriller.mp3",
                    size: 7200,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Videos",
        children: [
          {
            name: "Movies",
            children: [
              {
                name: "Action",
                children: [
                  {
                    name: "Inception.mp4",
                    size: 1500000,
                  },
                  {
                    name: "Gladiator.mp4",
                    size: 1750000,
                  },
                ],
              },
              {
                name: "Drama",
                children: [
                  {
                    name: "ForrestGump.mp4",
                    size: 1400000,
                  },
                  {
                    name: "Titanic.mp4",
                    size: 1900000,
                  },
                ],
              },
            ],
          },
          {
            name: "Tutorials",
            children: [
              {
                name: "Programming",
                children: [
                  {
                    name: "Python_Basics.mp4",
                    size: 45000,
                  },
                  {
                    name: "JavaScript_DeepDive.mp4",
                    size: 75000,
                  },
                ],
              },
              {
                name: "Art",
                children: [
                  {
                    name: "DrawingBasics.mp4",
                    size: 30000,
                  },
                  {
                    name: "WatercolorTechniques.mp4",
                    size: 35000,
                  },
                ],
              },
            ],
          },
          {
            name: "FamilyVideos",
            children: [
              {
                name: "GrandpaVideos",
                children: [
                  {
                    name: "VacationVideos",
                    children: [
                      {
                        name: "BeachTrip.mp4",
                        size: 120000,
                      },
                      {
                        name: "MountainRetreat.mp4",
                        size: 130000,
                      },
                    ],
                  },
                ],
              },
              {
                name: "PrivateVideos",
                children: [
                  {
                    name: "Birthday.mp4",
                    size: 100000,
                  },
                  {
                    name: "Wedding.mp4",
                    size: 125000,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Archives",
        children: [
          {
            name: "OldProjects",
            children: [
              {
                name: "Project_A_2010.zip",
                size: 50000,
              },
              {
                name: "Project_B_2012.rar",
                size: 60000,
              },
            ],
          },
          {
            name: "Backups",
            children: [
              {
                name: "FullBackup_2020.zip",
                size: 150000,
              },
              {
                name: "IncrementalBackup_2021.zip",
                size: 80000,
              },
            ],
          },
        ],
      },
      {
        name: "Software",
        children: [
          {
            name: "OperatingSystems",
            children: [
              {
                name: "Windows10.iso",
                size: 4500000,
              },
              {
                name: "Ubuntu.iso",
                size: 2500000,
              },
            ],
          },
          {
            name: "DevelopmentTools",
            children: [
              {
                name: "VSCodeSetup.exe",
                size: 75000,
              },
              {
                name: "NodeJSInstaller.msi",
                size: 30000,
              },
              {
                name: "GitInstaller.exe",
                size: 20000,
              },
            ],
          },
        ],
      },
    ],
  },
];
export default menus;
