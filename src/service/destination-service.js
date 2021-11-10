let destinationService = {};
const DestinationModel = require('../model/destination-model');

destinationService.getDestination = async (destinationId) => {
    if(destinationId) {
        const destinations = await DestinationModel.findOne({'destinationId': destinationId});
        return destinations;
    } else {
        const destinations = await DestinationModel.find();
        return destinations;
    }
}

destinationService.searchDestination = async (searchKey) => {
    const searchRegex = new RegExp(`.*${searchKey}.*`, "i");
    const destinations = await DestinationModel.find({'continent' : { $regex: searchRegex }});
    return destinations;
}

// add destination
destinationService.addDestination = async (destination) => {
    const createdDestination = await DestinationModel.create(destination);
    return createdDestination;
}

module.exports = destinationService;