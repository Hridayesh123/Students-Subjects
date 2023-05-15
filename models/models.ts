import { Sequelize, DataTypes } from "sequelize";
import { Model, Optional } from 'sequelize';

export const seq = new Sequelize("postgres", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres",
  });

  export const User_model = seq.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    secret_key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });


  export const Subject_model = seq.define("subjects", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  
export const Students_model = seq.define("students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middlename: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{timestamps: false})


export const StudentSubject_model = seq.define('student_subjects', {
  // selfGranted: DataTypes.BOOLEAN,
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  // student_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Students_model,
  //     key: 'id'
  //   }
  // },
  // subject_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Subject_model,
  //     key: 'id'
  //   }
  // },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},{timestamps: false});

Students_model.belongsToMany(Subject_model, { through: StudentSubject_model });
Subject_model.belongsToMany(Students_model, { through: StudentSubject_model });



export const StudentDetails_model = seq.define('get_student_details_by', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});




