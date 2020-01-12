const schema = {
  required: ['username', 'email', 'name', 'password', 'department'],
  properties: {
    username: { type: 'string', minLength: 4 },
    email: {
      type: 'string',
      pattern: '^[a-z]+.[0-9]{2}[a-z]{2}[0-9]{4}@([a-z]{2,4}.)?iitism.ac.in$'
    },
    name: { type: 'string' },
    password: { type: 'string', format: 'password' },
    branch: { type: 'number' },
    department: { type: 'number' },
    admission_no: {
      type: 'string',
      minLength: 8,
      maxLength: 8,
      pattern: '^[0-9]{2}[a-z]{2}[0-9]{4}$'
    },
    semester: { type: 'number', minimum: 1, maximum: 10 }
  },
  errorMessage: {
    required: {
      username: 'Username requried',
      email: 'Email required',
      name: 'Name required',
      password: 'Password required',
      department: 'Department required'
    },
    properties: {
      username: 'Invalid username',
      email: 'Invlalid email',
      name: 'Invalid name',
      password: 'Invalid password',
      branch: 'Invalid branch',
      department: 'Invalid department',
      admission_no: 'Invalid Admission number',
      semester: 'Invalid semester'
    },
    _: 'Invalid data'
  }
};

module.exports = schema;
