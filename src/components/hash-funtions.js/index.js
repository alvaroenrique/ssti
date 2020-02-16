import md5 from "md5"

export const PEPPER = "SSTI-TRABAJO-GRUPAL"

export const hash = (rawPassword, options = {}) => {
  /**
   * salt is optional, if not provided it will be set to current timestamp
   */
  const salt = options.salt ? options.salt : new Date().getTime()

  /**
   * rounds is optional, if not provided it will be set to 10
   */
  const rounds = options.rounds ? options.rounds : 10

  let hashed = md5(rawPassword + PEPPER + salt)
  console.log(hashed)

  for (let i = 0; i <= rounds; i++) {
    hashed = md5(hashed)
  }

  return `${salt}$${rounds}$${hashed}`
}

export const compare = (rawPassword, hashedPassword) => {
  try {
    const [salt, rounds] = hashedPassword.split("$")

    const hashedRawPassword = hash(`${rawPassword}`, { salt, rounds })

    return hashedPassword === hashedRawPassword
  } catch (error) {
    return false
  }
}
