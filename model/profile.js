import {DataTypes} from 'sequelize'
import {users} from './users.js'

export const profile = (sequelize) => {
    const schema = {
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allownull: false,
        //     references: {
        //         model: 'Users',
        //         key: 'id'
        //     }
        // },
        headline: {type: DataTypes.STRING},
        subheadline: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        hourly_rate: {type: DataTypes.INTEGER, allowNull: false},
        profile_image: {type: DataTypes.STRING},
        location: {type: DataTypes.STRING}
    }

    const Profile = sequelize.define('Profile', schema)
    const Users = users(sequelize)

    // Users.hasOne(Profile, {foreignKey: 'userId'})
    // Profile.belongsTo(Users)

    Users.hasOne(Profile)
    Profile.belongsTo(Users)

    return Profile
}