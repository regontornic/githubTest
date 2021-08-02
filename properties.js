const LIFE_LOG = {
    bloodPressure: {
       category: [
            {
                system: "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "vital-signs",
                display: "Vital Signs"
            }
        ],
        code: [
            {
                system: "https://www.hins.or.kr/",
                code: "H00114309",
                display: "bloodPressure"
            }
        ],
        text: "bloodPressure",
        bodySite: {
            code: [
                {
                    system: "https://www.hins.or.kr",
                    code: "H02202567",
                    display: "right arm"
                }
            ],
            text: "오른팔"
        },
        component: {
            sbp: {
                code: [
                    {
                        system: "https://www.hins.or.kr/",
                        code: "H03019145",
                        display: "sbp",
                    }
                ],
                text: "혈압(수축기)",
                value: {
                    unit: "mmHg",
                    system: "http://unitsofmeasure.org",
                    code: "mm[Hg]"
                }
            },
            dbp: {
                code: [
                    {
                        system: "https://www.hins.or.kr/",
                        code: "H02171908",
                        display: "dbp",
                    }
                ],
                text: "혈압(이완기)",
                value: {
                    unit: "mmHg",
                    system: "http://unitsofmeasure.org",
                    code: "mm[Hg]"
                }
            }
        }
    },
    heartRate: {
        category: [
            {
                system: "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "vital-signs",
                display: "Vital Signs"
            }
        ],
        code: [
            {
                system: "https://www.hins.or.kr/",
                code: "H00724342",
                display: "heartRate",
            }
        ],
        text: "심박수",
        component: {
            heartRateValue: {
                code: [
                    {
                        system: "https://www.hins.or.kr/",
                        code: "H00724342",
                        display: "heartRateValue"
                    }
                ],
                text: "심박수",
                value: {
                    unit: "beats/minute",
                    system: "http://unitsofmeasure.org",
                    code: "/min"
                }
            }
        }
    },
    sleep: {
        category: [
            {
                system: "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "activity",
                display: "Activity"
            }
        ],
        code: [
            {
                system: "https://www.hins.or.kr/",
                code: "H01580238",
                display: "sleep"
            }
        ],
        text: "수면",
        component: {
            sleepTime: {
                code: [
                    {
                        system: "https://www.hins.or.kr/",
                        code: "H02216243",
                        display: "sleepTime"
                    }
                ],
                text: "수면시간",
                value: {
                    unit: "min",
                    system: "http://unitsofmeasure.org",
                    code: "min"
                }
            },
            wakeTime: {
                code: [
                    {
                        system: "https://loinc.org/",
                        code: "65553-0",
                        display: "wakeTime"
                    }
                ],
                text: "기상시간",
                value: {
                    unit: "min",
                    system: "http://unitsofmeasure.org",
                    code: "min"
                }
            },
            bedTime: {
                code: [
                    {
                        system: "https://www.hins.or.kr/",
                        code: "H02963702",
                        display: "bedTime"
                    }
                ],
                text: "취침시간",
                value: {
                    unit: "min",
                    system: "http://unitsofmeasure.org",
                    code: "min"
                }
            }

        }
    },
    BMI: {
        code: [
            {
                system: "https://www.hins.or.kr",
                code: "H02133091",
                display: "BMI"
            }
        ],
        text: "BMI",
        value: {
            system: "http://unitsofmeasure.org",
            unit: "kg/m2",
            code: "kg/m2"
        }
    },
    hearing: {
        code: [
            {
                system: "https://www.hins.or.kr",
                code: "H00733393",
                display: "hearing"
            }
        ],
        text: "청력(좌/우)",
        valueString: ''
    }
};