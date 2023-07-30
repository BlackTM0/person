const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Карина",
            "id_3": "Нелли",
            "id_4": "Дарья",
            "id_5": "Екатерина",
            "id_6": "Александра",
            "id_7": "Наталья",
            "id_8": "Татьяна",
            "id_9": "Виктория",
            "id_10": "Анастасия"
        }
    }`,

maleJobJson: `{
    "count": 5,
    "list": {     
        "id_1": "Шахтер",
        "id_2": "Электрик",
        "id_3": "Солдат",
        "id_4": "Медбрат",
        "id_5": "Полицейский"
    }
}`,
femaleJobJson: `{
    "count": 5,
    "list": {     
        "id_1": "Швея",
        "id_2": "Блогерша",
        "id_3": "Гадалка",
        "id_4": "Медсестра",
        "id_5": "Проститутка"
    }
}`,

   
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() { 
        let gender = [this.GENDER_MALE,this.GENDER_FEMALE]; 
        let randomG = Math.round(Math.random()*(gender.length-1));
        return gender[randomG]; 
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        
        return this.randomValue(gender === this.GENDER_MALE ? this.firstNameMaleJson : this.firstNameFemaleJson);
      
    },
       

     randomSurname: function(gender) {
       return gender ===this.GENDER_MALE ? this.randomValue(this.surnameJson): this.randomValue(this.surnameJson) + "a"; 

    },
     



      randomMaleName: function() { 
       return this.randomValue(this.firstNameMaleJson); 
      },

    

      randomThirdName: function(gender) {
        const maleName = this.randomMaleName(this.firstNameMaleJson);
        if (gender === this.GENDER_MALE && maleName.endsWith('ий')) {
            
          return maleName.replace('ий', 'иевич'); } 

         if (gender === this.GENDER_MALE && maleName.endsWith('ил')) {
                return maleName.replace('ил', 'илович'); } 
        


         if (gender === this.GENDER_MALE &&maleName.endsWith('ан')) {
                return maleName.replace('ан', 'анович'); } 
            


         if (gender === this.GENDER_MALE &&maleName.endsWith('им')) {
                return maleName.replace('им', 'имович'); } 

        if (gender === this.GENDER_MALE &&maleName.endsWith('др')) {
                return maleName.replace('др', 'дрович'); } 

         if (gender === this.GENDER_MALE &&maleName.endsWith('ем')) {
                return maleName.replace('ем', 'емович'); } 

         if (gender === this.GENDER_MALE &&maleName.endsWith('та')) {
                return maleName.replace('та', 'тович'); } 

         if (gender === this.GENDER_MALE &&maleName.endsWith('ор')) {
                return maleName.replace('ор', 'орович'); } 

         if (gender === this.GENDER_MALE &&maleName.endsWith('ей')) {
                 return maleName.replace('ей', 'еевич'); } 
            
            

            
         if (gender === this.GENDER_FEMALE && maleName.endsWith('ий')) {
                return maleName.replace('ий', 'иевна');}


         if (gender === this.GENDER_FEMALE && maleName.endsWith('ил')) {
                  return maleName.replace('ил', 'иловна'); }


         if (gender === this.GENDER_FEMALE &&maleName.endsWith('им')) {
                return maleName.replace('им', 'имовна'); }

            if (gender === this.GENDER_FEMALE &&maleName.endsWith('др')) {
                 return maleName.replace('др', 'дровна'); }

            if (gender === this.GENDER_FEMALE &&maleName.endsWith('ан')) {
                return maleName.replace('ан', 'ановна'); }
      

         if (gender === this.GENDER_FEMALE &&maleName.endsWith('та')) {
            return maleName.replace('та', 'тишна'); }

         if (gender === this.GENDER_FEMALE &&maleName.endsWith('ем')) {
            return maleName.replace('ем', 'емовна'); 

        } if (gender === this.GENDER_FEMALE &&maleName.endsWith('ий')) {
            return maleName.replace('ий', 'иевна'); 

        } if (gender === this.GENDER_FEMALE &&maleName.endsWith('ор')) {
            return maleName.replace('ор', 'оровна'); 
        } if (gender === this.GENDER_FEMALE &&maleName.endsWith('ей')) {
            return maleName.replace('ей', 'еевна'); 
    
        
        } },
    
       
        
 
       randomDateBirth : function(){ 
            
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  

  const minYear = 1970;
  const maxYear = 2004;
  const year = randomInt(minYear, maxYear);
  const monthIndex = randomInt(0, 11);
  const month = months[monthIndex];
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const day = randomInt(1, daysInMonth);
  
  return `${day} ${month} ${year}`;


       },

    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.thirdName = this.randomThirdName(this.person.gender); 
        this.person.randomDateBirth = this.randomDateBirth(); 
    
        return this.person;
    } } 
