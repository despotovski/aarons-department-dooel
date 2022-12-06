export const has = (auth, ...roles) => {
  if (!auth) {
    return false
  }

  for (let i = 0; i < roles.length; i++) {
    if (auth.roles.includes(roles[i])) {
      return true
    }
  }

  return false
}

export const can = (auth, ...permissions) => {
  if (!auth) {
    return false
  }

  for (let i = 0; i < permissions.length; i++) {
    if (auth.permissions.includes(permissions[i])) {
      return true
    }
  }

  return false
}
