// Function respon

//-- 
const wait = () => { 
return '*⌛ _Cargando..._ ▬▬▬▭*\n\n*🧘🏻‍♂️ Espere por favor,* esto puede tomar unos segundos.'
}

//--
const stick = () => {
  return '❎ Los siento ocurrió Error, repita después de este mensaje'
}

//--
const err = (prefix) => {
  return `❎ Error! \nIntentalo de nuevo mas tarde`
}

//-- 
const group = () => {
  return '❎  Este comando es solo para grupos'
}

//-- 
const banf = () => {
  return '❎ Estás en la lista de baneados, Lo siento no puedes usar ningun comando'
}

//--
const ownerB = () => {
  return '❎  Esta función es solo para *el dueño del Bot*'
}

//--
const premi = () => {
  return '❎ Esta función es específicamente para usuarios Premium'
}

//--
const userB = (prefix) => {
  return `▢ No estas Verificado como usuario del bot, para usar los comandos primero verificate\n\n┌─⊷ *VERIFICACIÓN* ⊶\n├╼ Escribe *${prefix}Verify*\n└─────────────`
}

//--
const admin = () => {
  return '❎ Esta función es solo para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ ¡Para usar este comando debo ser *Administrador!*'
}


module.exports =  { wait, stick, err, group, banf, ownerB, premi, userB, admin, Badmin } 