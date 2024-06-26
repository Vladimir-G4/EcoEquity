import { Injectable } from '@angular/core';

interface Stock {
    name: string,
    ticker: string,
    price: number,
    desc: string,
    performance: string,
    esg: string,
    pe: number,
    risk: string
}


@Injectable({
    providedIn: 'root'
})
export class StockService {
    private WEEK: number = 0;
    private STOCK_KEY: string = 'stocks';

    constructor() {
        this.init();
    }

    private init(): void {
        if (!localStorage.getItem(this.STOCK_KEY)) {
            const defaultStocks: Stock[] = [
                {
                    name: "Green Energy Solutions Inc.", ticker: "GRNEN",
                    price: 45.80,
                    desc: "Specializes in renewable energy technologies, including solar, wind, and hydroelectric power. The company is committed to providing sustainable and clean energy solutions to reduce global carbon footprints.",
                    performance: "GRNEN has seen steady growth over the past year, driven by increasing demand for renewable energy sources. The company recently signed several large contracts, boosting its revenue and market share.",
                    esg: "A", pe: 28, risk: "Medium"
                },
                {
                    name: "EcoFutures Tech", ticker: "ECOFT",
                    price: 172.15,
                    desc: "Develops cutting-edge eco-friendly materials for construction and manufacturing. ECOFT aims to revolutionize the industry with sustainable and durable products.",
                    performance: "ECOFT's stock has been volatile, but recent advancements in their material technology have garnered significant investor interest. The company is expected to announce a major partnership soon.",
                    esg: "B+", pe: 35, risk: "High"
                },
                {
                    name: "Sustain Innovations", ticker: "SUSTN",
                    price: 38.50,
                    desc: "Focuses on sustainable consumer products, emphasizing recyclability and minimal environmental impact. SUSTN's product line includes eco-friendly packaging and household items.",
                    performance: "The company has reported strong quarterly earnings, with a significant increase in sales and customer base. SUSTN is expanding its market reach and introducing new products.",
                    esg: "A-", pe: 22, risk: "Low"
                },
                {
                    name: "CleanWave Solutions", ticker: "CLNWS",
                    price: 52.90,
                    desc: "Provides innovative water purification systems for both residential and industrial applications. CLNWS is dedicated to ensuring access to clean water worldwide.",
                    performance: "CLNWS has shown consistent growth, with a recent surge in orders from developing countries. The company is scaling up its operations to meet rising demand.",
                    esg: "A", pe: 30, risk: "Medium"
                },
                {
                    name: "NaturalX Bio", ticker: "NTRLX",
                    price: 84.25,
                    desc: "Engages in biotechnological research to create sustainable agricultural practices and products. NTRLX's innovations aim to enhance crop yields while minimizing environmental impact.",
                    performance: "NTRLX has reported mixed financial results, but its new product pipeline is promising. The company's recent patents have the potential to drive future growth.",
                    esg: "B+", pe: 40, risk: "High"
                },
                {
                    name: "SolarNexus", ticker: "SOLNX",
                    price: 160.40,
                    desc: "A leader in solar panel manufacturing, offering efficient and affordable solar energy solutions. SolarNexus focuses on making solar power accessible to all.",
                    performance: "SOLNX has experienced rapid growth, with expanding production facilities and rising global sales. The stock price has surged due to positive market reception of its latest solar panel models.",
                    esg: "A+", pe: 25, risk: "Medium"
                },
                {
                    name: "RecyTech Industries", ticker: "RECYT",
                    price: 48.30,
                    desc: "Specializes in advanced recycling technologies to reduce waste and promote circular economy practices. RECYT aims to transform waste management with innovative solutions.",
                    performance: "RECYT has maintained a stable performance with steady revenue growth. Recent government contracts have bolstered its financial position.",
                    esg: "A-", pe: 27, risk: "Low"
                },
                {
                    name: "BioGrow Corp.", ticker: "BIOGW",
                    price: 33.75,
                    desc: "Produces organic fertilizers and pest control products to support sustainable farming. BioGrow promotes healthier and more productive agricultural practices.",
                    performance: "BIOGW's earnings have been strong, driven by increased demand for organic farming solutions. The company is expanding its product line and entering new markets.",
                    esg: "B+", pe: 33, risk: "Medium"
                },
                {
                    name: "WindPower Innovations", ticker: "WINDP",
                    price: 55.60,
                    desc: "Develops state-of-the-art wind turbines and energy storage systems. WindPower Innovations is dedicated to advancing wind energy technology.",
                    performance: "WINDP has shown impressive growth, with significant investments in R&D. The company's latest wind turbine models have received positive reviews and increased orders.",
                    esg: "A", pe: 24, risk: "Medium"
                },
                {
                    name: "GeoTech Energy", ticker: "GEOTK",
                    price: 41.95,
                    desc: "Focuses on geothermal energy solutions for residential and commercial properties. GeoTech Energy aims to provide reliable and sustainable heating and cooling options.",
                    performance: "GEOTK's financial performance has been solid, with steady revenue and profit growth. The company is expanding its market presence and enhancing its technology.",
                    esg: "A", pe: 29, risk: "Low"
                },
                {
                    name: "WaterFix Technologies", ticker: "WTRFX",
                    price: 129.60,
                    desc: "Innovates in water conservation and management, providing smart irrigation systems. WaterFix Technologies helps reduce water usage and promote efficient water management.",
                    performance: "WTRFX has seen a gradual increase in sales and market penetration. The company's smart irrigation solutions have been well-received in both residential and agricultural sectors.",
                    esg: "A-", pe: 32, risk: "Medium"
                },
                {
                    name: "EcoArchitex", ticker: "ECOAR",
                    price: 58.75,
                    desc: "Designs and constructs eco-friendly buildings and infrastructure projects. EcoArchitex focuses on sustainability and energy efficiency in construction.",
                    performance: "ECOAR has experienced steady growth, with several high-profile projects completed recently. The company is well-positioned for future growth in the green building sector.",
                    esg: "A", pe: 26, risk: "Low"
                },
                {
                    name: "GreenWorth Investments", ticker: "GRWTH",
                    price: 37.85,
                    desc: "A green investment firm that funds and supports sustainable startups and projects. GreenWorth Investments aims to drive positive environmental change through strategic investments.",
                    performance: "GRWTH has shown robust financial performance, with a diversified portfolio yielding strong returns. The firm is actively seeking new investment opportunities in emerging green technologies.",
                    esg: "A", pe: 21, risk: "Medium"
                },
                {
                    name: "FinEx Group", ticker: "FINEX",
                    price: 250.40,
                    desc: "A leading financial services company offering a wide range of investment and banking solutions. FinEx Group serves both individual and corporate clients globally.",
                    performance: "FINEX has delivered consistent financial results, with stable revenue growth and strong asset management performance. The company is expanding its service offerings and client base.",
                    esg: "B", pe: 18, risk: "Low"
                },
                {
                    name: "TechRex Inc.", ticker: "TECRX",
                    price: 78.25,
                    desc: "Develops advanced software and hardware solutions for businesses and consumers. TechRex Inc. is known for its innovative approach to technology development.",
                    performance: "TECRX has reported impressive earnings, driven by strong sales of its new product lines. The company's stock has performed well, reflecting investor confidence.",
                    esg: "B-", pe: 22, risk: "Medium"
                },
                {
                    name: "CyberMax Solutions", ticker: "CYBRX",
                    price: 91.15,
                    desc: "Specializes in cybersecurity technologies and services to protect against digital threats. CyberMax Solutions provides comprehensive security solutions for businesses.",
                    performance: "CYBRX has seen significant growth in both revenue and market share. The company's latest cybersecurity products have been well-received in the market.",
                    esg: "B", pe: 30, risk: "High"
                },
                {
                    name: "QuantumTech LTD.", ticker: "QUANT",
                    price: 363.70,
                    desc: "Focuses on quantum computing research and development for commercial applications. QuantumTech aims to revolutionize computing with its cutting-edge technology.",
                    performance: "QUANT has shown steady progress in its R&D efforts, attracting substantial investment. The company is poised to launch its first commercial quantum computing product soon.",
                    esg: "B+", pe: 35, risk: "High"
                },
                {
                    name: "Innovista Corp.", ticker: "INNOV",
                    price: 144.90,
                    desc: "A technology company creating innovative solutions in AI and machine learning. Innovista Corp. develops applications that enhance business efficiency and intelligence.",
                    performance: "INNOV's financial performance has been robust, with strong revenue growth from its AI solutions. The company is expanding its customer base and market reach.",
                    esg: "B", pe: 28, risk: "Medium"
                },
                {
                    name: "NetLyfe", ticker: "NETLY",
                    price: 55.20,
                    desc: "Provides cutting-edge internet and communication technologies, including 5G networks. NetLyfe aims to enhance connectivity and digital infrastructure.",
                    performance: "NETLY has experienced rapid growth, driven by the rollout of its 5G network services. The company's stock has seen significant gains, reflecting positive market sentiment.",
                    esg: "B", pe: 20, risk: "Low"
                },
                {
                    name: "BlockSecure Inc.", ticker: "BLOCK",
                    price: 71.85,
                    desc: "Develops blockchain-based solutions for secure and transparent transactions. BlockSecure Inc. offers blockchain services to various industries, including finance and supply chain.",
                    performance: "BLOCK has seen impressive growth, with increasing adoption of its blockchain solutions. The company's recent partnerships have boosted its market position.",
                    esg: "A", pe: 28, risk: "Medium"
                },
                {
                    name: "FinTechPro", ticker: "FINTK",
                    price: 239.40,
                    desc: "Offers financial technology solutions to streamline banking and investment operations. FinTechPro focuses on enhancing the efficiency and security of financial transactions.",
                    performance: "FINTK has shown strong financial performance, with rising revenue from its innovative fintech products. The company is expanding its market presence globally.",
                    esg: "B+", pe: 23, risk: "Medium"
                },
                {
                    name: "CloudServe", ticker: "CLDSV",
                    price: 164.95,
                    desc: "Provides cloud computing and storage solutions for businesses of all sizes. CloudServe aims to deliver reliable and scalable cloud services.",
                    performance: "CLDSV has reported solid earnings, with growing demand for its cloud solutions. The company is investing in expanding its data centers and service offerings.",
                    esg: "B", pe: 26, risk: "Low"
                },
                {
                    name: "DigitalTrends", ticker: "DIGTR",
                    price: 45.80,
                    desc: "A media and tech company focused on the latest trends in digital technology and gadgets. DigitalTrends provides news, reviews, and insights on emerging tech.",
                    performance: "DIGTR has seen steady growth in its audience and advertising revenue. The company's expansion into new content areas has been well-received.",
                    esg: "B-", pe: 19, risk: "Medium"
                },
                {
                    name: "DataQuest Analytics", ticker: "DATAQ",
                    price: 153.20,
                    desc: "Specializes in big data analytics and business intelligence services. DataQuest Analytics helps businesses leverage data for strategic decision-making.",
                    performance: "DATAQ has reported strong financial results, with rising demand for its analytics services. The company is expanding its client base and enhancing its technology offerings.",
                    esg: "B", pe: 24, risk: "Low"
                },
                {
                    name: "ApexX Solutions", ticker: "APEXX",
                    price: 58.10,
                    desc: "A leader in providing innovative software solutions for enterprise resource planning (ERP) and customer relationship management (CRM). ApexX Solutions aims to streamline business operations.",
                    performance: "APEXX has seen robust growth, driven by high demand for its ERP and CRM solutions. The company’s recent product updates have received positive feedback from customers.",
                    esg: "B", pe: 21, risk: "Medium"
                },
                {
                    name: "MineX Resources", ticker: "MNEXR",
                    price: 28.50,
                    desc: "A diversified mining company with operations in various minerals, including significant thermal coal extraction. Thermal coal accounts for around 30% of its revenue.",
                    performance: "MNEXR has shown stable financial performance, with consistent demand for its diverse mineral products. However, the stock faces scrutiny due to its reliance on coal.",
                    esg: "C+", pe: 14, risk: "Medium"
                },
                {
                    name: "UtilityCorp", ticker: "UTILC",
                    price: 34.80,
                    desc: "A utility company that operates a mix of energy sources, with a substantial portion of revenue from coal-fired power plants. Coal-derived energy accounts for approximately 27% of its revenue.",
                    performance: "UTILC has reported strong earnings, benefiting from stable energy demand. The stock is under pressure from regulatory changes aimed at reducing carbon emissions and transitioning to cleaner energy.",
                    esg: "C", pe: 16, risk: "Medium"
                },
                {
                    name: "Defense Solutions Inc.", ticker: "DEFNS",
                    price: 145.60,
                    desc: "A defense contractor involved in the production of various military equipment, including components that may be used in controversial weapons. Some of its revenue is derived from these high-risk products.",
                    performance: "DEFNS has shown strong financial performance, driven by high demand for its defense products. The stock is considered high risk due to ethical concerns and potential regulatory scrutiny.",
                    esg: "B", pe: 17, risk: "High"
                },
                {
                    name: "ChemLogics Corp.", ticker: "CHEML",
                    price: 50.20,
                    desc: "Engages in chemical manufacturing with a small but significant segment dedicated to military applications, including components for controversial weapons. This segment contributes notably to its revenue.",
                    performance: "CHEML has reported significant revenue from government contracts. The stock is volatile, reflecting the ethical and regulatory risks associated with its military-related business operations.",
                    esg: "C-", pe: 19, risk: "High"
                }
            ];
            localStorage.setItem(this.STOCK_KEY, JSON.stringify(defaultStocks));
        }
    }



}
