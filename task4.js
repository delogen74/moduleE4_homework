function ElectricAppliance(name, power) {
    this.name = name;       // Название прибора
    this.power = power;     // Потребляемая мощность в ваттах
    this.isOn = false;      // Состояние прибора (включен/выключен)
}

ElectricAppliance.prototype.turnOn = function() {
    if (!this.isOn) {
        this.isOn = true;
        console.log(`${this.name} включен.`);
    } else {
        console.log(`${this.name} уже включен.`);
    }
};

ElectricAppliance.prototype.turnOff = function() {
    if (this.isOn) {
        this.isOn = false;
        console.log(`${this.name} выключен.`);
    } else {
        console.log(`${this.name} уже выключен.`);
    }
};

function Lamp(name, power, brightness) {
    ElectricAppliance.call(this, name, power); 
    this.brightness = brightness; 
}

Lamp.prototype = Object.create(ElectricAppliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость ${this.name} установлена на ${this.brightness} люмен.`);
};

function Computer(name, power, brand) {
    ElectricAppliance.call(this, name, power);
    this.brand = brand; 
}

Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(softwareName) {
    console.log(`Программное обеспечение "${softwareName}" установлено на ${this.brand} ${this.name}.`);
};

const deskLamp = new Lamp('Настольная лампа', 60, 800);       // 60 Вт, 800 люмен
const gamingComputer = new Computer('Игровой компьютер', 450, 'Alienware');

// Включение приборов
deskLamp.turnOn();
gamingComputer.turnOn(); 

// Использование специфических методов
deskLamp.adjustBrightness(1000); 
gamingComputer.installSoftware('Cyberpunk 2077');

// Подсчет общей потребляемой мощности
const appliances = [deskLamp, gamingComputer];
const totalPower = appliances.reduce((total, appliance) => {
    return appliance.isOn ? total + appliance.power : total;
}, 0);

console.log(`Общая потребляемая мощность: ${totalPower} Вт`);

// Выключение приборов
deskLamp.turnOff();           // Вывод: Настольная лампа выключен.
gamingComputer.turnOff();    // Вывод: Игровой компьютер выключен.

// Подсчет потребляемой мощности после выключения
const totalPowerAfter = appliances.reduce((total, appliance) => {
    return appliance.isOn ? total + appliance.power : total;
}, 0);

console.log(`Потребляемая мощность после выключения: ${totalPowerAfter} Вт`);
